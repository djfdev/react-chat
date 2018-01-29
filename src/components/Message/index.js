import React from 'react'
import PropTypes from 'prop-types'
import prettyDate from 'date-fns/distance_in_words_to_now'

import './index.css'

const Message = props =>
  <div className='message'>
    <div className='message__avatar-wrapper' />
    <div className='message__bubble'>
      <div className='message__bubble-arrow' />
      <div className='message__body'>{props.body}</div>
      <div className='message__footer'>
        <span className='message__userName'>{props.user.userName}</span>
        <span className='message__sentAt'>{prettyDate(props.sentAt)} ago</span>
      </div>
    </div>
  </div>

Message.propTypes = {
  user: PropTypes.shape({ userName: PropTypes.string }).isRequired,
  body: PropTypes.string.isRequired,
  sentAt: PropTypes.instanceOf(Date)
}

export default Message
