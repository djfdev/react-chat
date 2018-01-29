import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import Message from '../Message'

const MessageList = props =>
  <ul className='message-list'>
    {props.messages.map(message => {
      return (
        <li className='message-list__item' key={`message-${message.id}`}>
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
