import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-primitives'

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20
  }
})

const Caption = ({ children, style, ...props }) => (
  <Text
    style={[styles.text, style]}
    {...props}
  >
    {children}
  </Text>
)

Caption.defaultProps = {
  style: undefined
}

Caption.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
}

export default Caption
