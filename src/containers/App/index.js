import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'

import UserListContainer from '../UserListContainer'
import MessageListContainer from '../MessageListContainer'

const App = () =>
  <Provider store={store}>
    <div>
      <UserListContainer />
      <MessageListContainer />
    </div>
  </Provider>

export default App
