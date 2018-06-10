import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-primitives'

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 20
  }
})

const Body = ({ children, style, ...props }) => (
  <Text
    style={[styles.text, style]}
    {...props}
  >
    {children}
  </Text>
)

Body.defaultProps = {
  style: undefined
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
}

export default Body
