import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

import Message from '../Message'

class MessageList extends Component {
  constructor (props) {
    super(props)

    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.scrollToBottom)
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  componentWillUnmount () {
    window.removeEventListener(this.scrollToBottom)
  }

  scrollToBottom () {
    this.list.scrollIntoView(false)
  }

  render () {
    return (
      <ul ref={list => { this.list = list }} className='message-list'>
        {this.props.messages.map(message => {
          return (
            <li className='message-list__item' key={`message-${message.id}`}>
              <Message {...message} />
            </li>
          )
        })}
      </ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array
}

MessageList.defaultProps = {
  messages: []
}

export default MessageList
