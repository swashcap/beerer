import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-primitives'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  item: {
    flexShrink: 1
  },
  itemPadding: {
    marginLeft: 30
  }
})

const MetaList = ({ children }) => (
  <View style={styles.container}>
    {React.Children.map(children, (child, index) => {
      const style = index === 0
        ? styles.item
        : [styles.item, styles.itemPadding]

      return (
        <View key={child.props.property} style={style}>
          {child}
        </View>
      )
    })}
  </View>
)

MetaList.propTypes = {
  /** Collection of `MetaListItem` elements */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired
  ])
}

export default MetaList
