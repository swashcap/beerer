import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, Touchable, View } from 'react-primitives'

import Body from './text/Body'
import Caption from './text/Caption'
import colors from '../styles/colors'

const styles = StyleSheet.create({
  body: {
    fontWeight: '500',
    marginBottom: 5
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 2
  },
  image: {
    borderRadius: 30,
    height: 60,
    marginRight: 15,
    width: 60
  },
  location: {
    color: colors.textSecondary,
    paddingLeft: 10
  }
})

const ListItem = ({
  brewery,
  imageUri: uri,
  location,
  name,
  onPress
}) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
      />
      <View>
        <Body
          numberOfLines={1}
          style={styles.body}
        >
          {name}
        </Body>
        <Caption numberOfLines={1}>
          {brewery}
          <Text style={styles.location}>{location}</Text>
        </Caption>
      </View>
    </View>
  </Touchable>
)

ListItem.propTypes = {
  brewery: PropTypes.string.isRequired,
  imageUri: PropTypes.string,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default ListItem
