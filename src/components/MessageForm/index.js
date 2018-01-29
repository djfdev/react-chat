import React from 'react'
import PropTypes from 'prop-types'

const MessageForm = props =>
  <form onSubmit={props.handleSubmit}>
    <input
      value={props.value}
      placeholder='Say something ...'
      aria-label='New Message'
      onChange={props.handleChange}
    />
    <button type='submit'>Send</button>
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
