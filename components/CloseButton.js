import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Touchable, View } from 'react-primitives'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .45)',
    borderRadius: 20,
    justifyContent: 'center',
    height: 40,
    width: 40
  },
  inner: {
    borderColor: 'rgba(0, 0, 0, .55)',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    height: 15,
    transform: [{
      translateY: -4
    }, {
      rotate: '45deg'
    }],
    width: 15
  }
})

const CloseButton = ({ onPress, ...props }) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.inner} />
    </View>
  </Touchable>
)

CloseButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default CloseButton
