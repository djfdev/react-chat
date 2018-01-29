import React from 'react'
import PropTypes from 'prop-types'

import Message from '../Message'

const MessageList = props =>
  <ul>
    {props.messages.map(message => {
      return (
        <li key={`message-${message.id}`}>
          <Message {...message} />
        </li>
      )
    })}
  </ul>

MessageList.propTypes = {
  messages: PropTypes.array
}

MessageList.defaultProps = {
  messages: []
}

export default MessageList
