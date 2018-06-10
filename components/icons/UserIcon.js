import React from 'react'
import { bool } from 'prop-types'
import { Image } from 'react-primitives'

import common from '../../styles/common'
import user from '../../images/user.png'
import userActive from '../../images/user_active.png'

const UserIcon = ({ active, ...props }) => (
  <Image
    {...props}
    source={active ? userActive : user}
    style={common.icon}
  />
)

UserIcon.defaultProps = {
  active: false
}

UserIcon.propTypes = {
  active: bool
}

export default UserIcon
