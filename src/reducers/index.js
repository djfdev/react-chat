import * as types from '../actions/types'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return Object.assign({}, state, {
        users: action.payload.users
      })
    case types.GET_MESSAGES:
      return Object.assign({}, state, {
        messages: action.payload.messages
      })
    default:
      return state
  }
}

export default reducer
