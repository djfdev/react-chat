import React from 'react'
import { Provider } from 'react-redux'

import './index.css'

import store from '../../store'

import UserListContainer from '../UserListContainer'
import MessageListContainer from '../MessageListContainer'
import MessageFormContainer from '../MessageFormContainer'

const App = () =>
  <Provider store={store}>
    <div className='app'>
      <div className='app__sidebar'>
        <div className='app__sidebar-title'>Online Now</div>
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

export default App
