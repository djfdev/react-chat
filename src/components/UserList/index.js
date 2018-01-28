import React from 'react'
import PropTypes from 'prop-types'

const UserList = props =>
  <ul>
    {props.users.map(user => {
      return (
        <li key={`user-${user.userName}`}>
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
