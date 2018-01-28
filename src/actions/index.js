import * as types from './types'
import * as api from '../api'

export const getUsers = () => {
  return async dispatch => {
    const users = await api.getUsers()
    dispatch({ type: types.GET_USERS, payload: { users } })
  }
}
