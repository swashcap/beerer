import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Touchable, View } from 'react-primitives'

import Body from './text/Body'
import colors from '../styles/colors'

const styles = StyleSheet.create({
  button: {
    borderColor: colors.primary,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 7
  },
  text: {
    color: colors.primary,
    fontWeight: '500',
    textAlign: 'center'
  }
})

const Button = ({
  children,
  onPress
}) => (
  <Touchable onPress={onPress}>
    <View style={styles.button}>
      <Body style={styles.text}>{children}</Body>
    </View>
  </Touchable>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Button
