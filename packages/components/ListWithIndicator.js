import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-primitives'

import ListIcon from './icons/ListIcon'
import colors from '../styles/colors.json'
import common from '../styles/common'

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  indicator: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexShrink: 1,
    justifyContent: 'center',
    minWidth: 16,
    paddingHorizontal: 4,
    paddingVertical: 3
  },
  indicatorText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 10,
    textAlign: 'center'
  },
  indicatorWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    right: -10,
    top: -10
  }
})

const ListWithIndicator = ({ active, count, ...props }) => {
  const indicator = count
    ? (
      <View style={styles.indicatorWrapper}>
        <View style={styles.indicator}>
          <Text style={styles.indicatorText}>
            {count}
          </Text>
        </View>
      </View>
    )
    : undefined

  return (
    <View
      {...props}
      style={[common.icon, styles.container]}
    >
      <ListIcon active={active} />
      {indicator}
    </View>
  )
}

ListWithIndicator.defaultProps = {
  active: false,
  count: 0
}

ListWithIndicator.propTypes = {
  active: PropTypes.bool,
  count: PropTypes.number
}

export default ListWithIndicator
