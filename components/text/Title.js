import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-primitives'

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 25
  }
})

const Title = ({ children, style, ...props }) => (
  <Text
    style={[styles.text, style]}
    {...props}
  >
    {children}
  </Text>
)

Title.defaultProps = {
  style: undefined
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
}

export default Title
