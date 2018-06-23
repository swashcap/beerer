import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-primitives'

const styles = StyleSheet.create({
  property: {
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 5
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20
  }
})

const MetaListItem = ({ property, value }) => (
  <View>
    <Text style={styles.property}>{property}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
)

MetaListItem.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default MetaListItem
