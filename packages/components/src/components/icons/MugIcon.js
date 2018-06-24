import React from 'react'
import { bool } from 'prop-types'
import { Image } from 'react-primitives'

import common from '../../styles/common'
import mug from '../../images/mug.png'
import mugActive from '../../images/mug_active.png'

const MugIcon = ({ active, ...props }) => (
  <Image
    {...props}
    source={active ? mugActive : mug}
    style={common.icon}
  />
)

MugIcon.defaultProps = {
  active: false
}

MugIcon.propTypes = {
  active: bool
}

export default MugIcon
