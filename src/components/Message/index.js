import React from 'react'
import PropTypes from 'prop-types'

const Message = props =>
  <div>
    <div>{props.user.userName}</div>
    <div>{props.body}</div>
    <div>{props.sentAt.toString()}</div>
  </div>

Message.propTypes = {
  user: PropTypes.shape({ userName: PropTypes.string }).isRequired,
  body: PropTypes.string.isRequired,
  sentAt: PropTypes.instanceOf(Date)
}

export default Message
