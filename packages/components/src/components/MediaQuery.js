import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-primitives'

/**
 * {@link http://facebook.github.io/react-native/docs/dimensions.html}
 */
export default class MediaQuery extends Component {
  constructor (props) {
    super(props)

    const { height, width } = Dimensions.get('window')

    this.state = { height, width }
    this.handleDimensionsChange = this.handleDimensionsChange.bind(this)

    Dimensions.addEventListener('change', this.handleDimensionsChange)
  }

  componentWillUnmount () {
    Dimensions.removeEventListener('change', this.handleDimensionsChange)
  }

  handleDimensionsChange ({ window: { height, width } }) {
    this.setState({ height, width })
  }

  render () {
    const {
      children,
      styleLarge,
      styleMedium,
      style: styleSmall
    } = this.props
    const { width } = this.state

    const style = []

    if (children.props.style) {
      style.push(children.props.style)
    }

    if (width > 800 && styleLarge) {
      style.push(styleLarge)
    } else if (width > 500 && styleMedium) {
      style.push(styleMedium)
    } else if (styleSmall) {
      style.push(styleSmall)
    }

    let props

    if (style.length > 1) {
      props = { style }
    } else if (style.length === 1) {
      props = {
        style: style[0]
      }
    }

    return React.cloneElement(children, props)
  }
}

const StylePropType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.number,
  PropTypes.object
])

MediaQuery.propTypes = {
  children: PropTypes.node,
  style: StylePropType,
  styleLarge: StylePropType,
  styleMedium: StylePropType
}
