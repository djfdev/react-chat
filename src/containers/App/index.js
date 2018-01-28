import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'

import UserListContainer from '../UserListContainer'

const App = () =>
  <Provider store={store}>
    <UserListContainer />
  </Provider>

export default App
