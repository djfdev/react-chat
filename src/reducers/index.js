import * as types from '../actions/types'
import { currentUser } from '../api/data'

const initialState = {
  currentUser,
  messages: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return Object.assign({}, state, {
        users: action.payload.users
      })
    case types.GET_MESSAGES:
      return Object.assign({}, state, {
        messages: action.payload.messages
      })
    case types.UPDATE_CURRENT_MESSAGE:
      return Object.assign({}, state, {
        currentMessage: action.payload.body
      })
    case types.CREATE_MESSAGE:
      const message = Object.assign({}, action.payload.message, {
        id: state.messages.length + 1
      })

      return Object.assign({}, state, {
        messages: state.messages.concat(message),
        currentMessage: ''
      })
    default:
      return state
  }
}

export default reducer
