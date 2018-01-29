/* globals describe, test, expect */
import reducer from './'
import * as types from '../actions/types'

import { messages, users } from '../api/data'

describe('reducer', () => {
  describe('GET_USERS', () => {
    test('it returns state with array of users', () => {
      const action = {
        type: types.GET_USERS,
        payload: { users }
      }

      const expectedState = { users }

      expect(reducer(undefined, action)).toEqual(expectedState)
    })
  })

  describe('GET_MESSAGES', () => {
    test('it returns state with array of messages', () => {
      const action = {
        type: types.GET_MESSAGES,
        payload: { messages }
      }

      const expectedState = { messages }

      expect(reducer(undefined, action)).toEqual(expectedState)
    })
  })
})
