import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'

import UserListContainer from '../UserListContainer'
import MessageListContainer from '../MessageListContainer'
import MessageFormContainer from '../MessageFormContainer'

const App = () =>
  <Provider store={store}>
    <div>
      <UserListContainer />
      <MessageListContainer />
      <MessageFormContainer />
    </div>
  </Provider>

export default App
