import * as types from '../actions/types'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return Object.assign({}, state, {
        users: action.payload.users
      })
    default:
      return state
  }
}

export default reducer
