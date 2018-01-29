import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './index.css'

import store from '../../store'

import UserListContainer from '../UserListContainer'
import MessageListContainer from '../MessageListContainer'
import MessageFormContainer from '../MessageFormContainer'

class App extends Component {
  constructor () {
    super()

    this.state = { drawerOpen: false }
    this.toggleInput = this.toggleInput.bind(this)
  }

  toggleInput () {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render () {
    return (
      <Provider store={store}>
        <div className='app'>
          <input
            className='app__drawer-control'
            type='checkbox'
            checked={this.state.drawerOpen}
          />
          <button className='app__drawer-open' onClick={this.toggleInput}>
            {String.fromCharCode(0x2630)}
          </button>
          <div className='app__sidebar'>
            <div className='app__sidebar-title'>Online Now</div>
            <button className='app__drawer-close' onClick={this.toggleInput}>
              {String.fromCharCode(0x00D7)}
            </button>
            <UserListContainer />
          </div>
          <div className='app__main'>
            <div className='app__content'>
              <MessageListContainer />
            </div>
            <div className='app__footer'>
              <MessageFormContainer />
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
