import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import UserList from '../../components/UserList'

export class UserListContainer extends Component {
  componentDidMount () {
    this.props.actions.getUsers()
  }

  render () {
    return <UserList users={this.props.users} />
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
