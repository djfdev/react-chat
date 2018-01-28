/* globals describe, jest, test, expect */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './'
import * as types from './types'
import * as api from '../api'

import { users } from '../api/data'

const mockStore = configureMockStore([thunk])

describe('actions', () => {
  describe('getUsers', () => {
    test('dispatches action with a list of users', async () => {
      const store = mockStore({ users: [] })
      const expectedAction = {
        type: types.GET_USERS,
        payload: { users }
      }

      api.getUsers = jest.fn().mockReturnValue(users)

      try {
        await store.dispatch(actions.getUsers())
        expect(store.getActions()).toEqual([expectedAction])
      } catch (error) {
        throw error
      }
    })
  })
})
