import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, View } from 'react-primitives'

import PageIndicator from './PageIndicator'

const styles = StyleSheet.create({
  container: {
    height: 280,
    position: 'relative'
  },
  image: {
    height: 280,
    width: '100%'
  },
  indicator: {
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: '100%'
  }
})

class Carousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: 0
    }
  }

  render () {
    const { images, style, ...props } = this.props

    return (
      <View
        {...props}
        style={[style, styles.container]}
      >
        <Image
          resizeMode='cover'
          source={{
            uri: images[0]
          }}
          style={styles.image}
        />
        <View style={styles.indicator}>
          <PageIndicator
            count={images.length}
            current={this.state.current}
          />
        </View>
      </View>
    )
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Carousel
