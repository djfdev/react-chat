/* globals describe, beforeEach, jest, test, expect */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './'
import * as types from './types'
import * as api from '../api'

import { messages, users } from '../api/data'

const mockStore = configureMockStore([thunk])

describe('actions', () => {
  let store

  beforeEach(() => { store = mockStore({}) })

  describe('getUsers', () => {
    test('dispatches action with a list of users', async () => {
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

  describe('getMessages', () => {
    test('dispatches action with a list of messages', async () => {
      const expectedAction = {
        type: types.GET_MESSAGES,
        payload: { messages }
      }

      api.getMessages = jest.fn().mockReturnValue(messages)

      try {
        await store.dispatch(actions.getMessages())
        expect(store.getActions()).toEqual([expectedAction])
      } catch (error) {
        throw error
      }
    })
  })
})
