import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import MessageList from '../../components/MessageList'

export class MessageListContainer extends Component {
  componentDidMount () {
    this.props.actions.getMessages()
  }

  render () {
    return <MessageList messages={this.props.messages} />
  }
}

const mapStateToProps = state => {
  return { messages: state.messages }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListContainer)
