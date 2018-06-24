import React from 'react'
import { bool } from 'prop-types'
import { Image } from 'react-primitives'

import common from '../../styles/common'
import list from '../../images/list.png'
import listActive from '../../images/list_active.png'

const ListIcon = ({ active }) => (
  <Image
    source={active ? listActive : list}
    style={common.icon}
  />
)

ListIcon.defaultProps = {
  active: false
}

ListIcon.propTypes = {
  active: bool
}

export default ListIcon
