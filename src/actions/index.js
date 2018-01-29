import * as types from './types'
import * as api from '../api'

export const getUsers = () => {
  return async dispatch => {
    const users = await api.getUsers()
    dispatch({ type: types.GET_USERS, payload: { users } })
  }
}

export const getMessages = () => {
  return async dispatch => {
    const messages = await api.getMessages()
    dispatch({ type: types.GET_MESSAGES, payload: { messages } })
  }
}
