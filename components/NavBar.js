import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Touchable, View } from 'react-primitives'

import colors from '../styles/colors.json'
import ListWithIndicator from './ListWithIndicator'
import UserIcon from './icons/UserIcon'
import MugIcon from './icons/MugIcon'

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15
  }
})

const NavBar = ({
  active,
  count,
  onPress
}) => (
  <View style={styles.container}>
    <Touchable onPress={onPress}>
      <UserIcon active={active === 'user'} />
    </Touchable>
    <Touchable onPress={onPress}>
      <MugIcon active={active === 'home'} />
    </Touchable>
    <Touchable onPress={onPress}>
      <ListWithIndicator
        active={active === 'list'}
        count={count}
      />
    </Touchable>
  </View>
)

NavBar.defaultProps = {
  active: 'home',
  count: 0
}

NavBar.propTypes = {
  active: PropTypes.oneOf([
    'home',
    'list',
    'user'
  ]),
  count: PropTypes.number,
  onPress: PropTypes.func.isRequired
}

export default NavBar
