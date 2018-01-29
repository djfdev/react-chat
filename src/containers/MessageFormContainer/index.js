import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import MessageForm from '../../components/MessageForm'

export class MessageFormContainer extends Component {
  constructor () {
    super()

    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change (e) {
    this.props.actions.updateCurrentMessage(e.target.value)
  }

  submit (e) {
    e.preventDefault()

    this.props.actions.createMessage({
      user: this.props.currentUser,
      body: this.props.currentMessage,
      sentAt: new Date()
    })
  }

  render () {
    return (
      <MessageForm
        value={this.props.currentMessage}
        handleChange={this.change}
        handleSubmit={this.submit}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentMessage: state.currentMessage,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageFormContainer)
