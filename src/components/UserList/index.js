import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const UserList = props =>
  <ul>
    {props.users.map(user => {
      return (
        <li
          key={`user-${user.userName}`}
          className='user-list__item'
        >
          {user.userName}
        </li>
      )
    })}
  </ul>

UserList.propTypes = {
  users: PropTypes.array
}

UserList.defaultProps = {
  users: []
}

export default UserList
