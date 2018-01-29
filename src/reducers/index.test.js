/* globals describe, test, expect */
import reducer from './'
import * as types from '../actions/types'

import { messages, users, currentUser } from '../api/data'

describe('reducer', () => {
  describe('GET_USERS', () => {
    test('it returns state with array of users', () => {
      const action = {
        type: types.GET_USERS,
        payload: { users }
      }

      const expectedState = { users }

      expect(reducer({}, action)).toEqual(expectedState)
    })
  })

  describe('GET_MESSAGES', () => {
    test('it returns state with array of messages', () => {
      const action = {
        type: types.GET_MESSAGES,
        payload: { messages }
      }

      const expectedState = { messages }

      expect(reducer({}, action)).toEqual(expectedState)
    })
  })

  describe('UPDATE_CURRENT_MESSAGE', () => {
    test('it returns state with the updated message', () => {
      const state = { currentMessage: 'hello' }

      const action = {
        type: types.UPDATE_CURRENT_MESSAGE,
        payload: { body: 'hello world' }
      }

      const expectedState = { currentMessage: action.payload.body }

      expect(reducer(state, action)).toEqual(expectedState)
    })
  })

  describe('CREATE_MESSAGE', () => {
    test('it returns state with new message and clears currentMessage', () => {
      const state = { messages, currentUser }

      const nextMessage = {
        id: messages.length + 1,
        user: users[0],
        body: 'hello world',
        sentAt: new Date()
      }

      const action = {
        type: types.CREATE_MESSAGE,
        payload: { message: nextMessage }
      }

      const expectedState = {
        messages: state.messages.concat(action.payload.message),
        currentMessage: '',
        currentUser
      }

      expect(reducer(state, action)).toEqual(expectedState)
    })
  })
})
