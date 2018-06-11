import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Touchable, View } from 'react-primitives'

import Body from './text/Body'
import Title from './text/Title'
import colors from '../styles/colors.json'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textSecondary,
    borderRadius: 4,
    position: 'relative'
  },
  image: {
    borderRadius: 4,
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  location: {
    opacity: 0.651
  },
  text: {
    color: colors.white,
    textShadowColor: colors.text,
    textShadowOffset: {
      height: 1,
      width: 1
    }
  },
  textWrapper: {
    padding: 20
  },
  title: {
    marginBottom: 5
  }
})

const Card = ({
  brewery,
  image: uri,
  location,
  onPress,
  title
}) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <Image
        resizeMode='cover'
        source={{ uri }}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Title style={[styles.text, styles.title]}>{title}</Title>
        <Body style={styles.text}>{brewery}</Body>
        <Body style={[styles.text, styles.location]}>{location}</Body>
      </View>
    </View>
  </Touchable>
)

Card.propTypes = {
  brewery: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Card
