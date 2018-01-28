/* globals describe, test, expect */
import reducer from './'
import * as types from '../actions/types'

import { users } from '../api/data'

describe('reducer', () => {
  describe('GET_USERS', () => {
    test('it returns state with array of users', () => {
      const state = { users: [] }
      const action = {
        type: types.GET_USERS,
        payload: { users }
      }

      const expectedState = {
        users: users
      }

      expect(reducer(state, action)).toEqual(expectedState)
    })
  })
})
