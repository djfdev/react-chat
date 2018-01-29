import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const MessageForm = props =>
  <form className='message-form' onSubmit={props.handleSubmit}>
    <input
      className='message-form__input'
      value={props.value}
      placeholder='Say something ...'
      aria-label='New Message'
      onChange={props.handleChange}
    />
    <button className='message-form__submit' type='submit'>Send</button>
  </form>

MessageForm.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

MessageForm.defaultProps = {
  value: ''
}

export default MessageForm
