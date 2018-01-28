/* globals describe, beforeEach, jest, test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import * as actions from '../../actions'

import { UserListContainer } from './'

import { users } from '../../api/data'

describe('UserListContainer', () => {
  let wrapper
  let userList

  beforeEach(() => {
    actions.getUsers = jest.fn()
    wrapper = shallow(<UserListContainer actions={actions} users={users} />)
    userList = wrapper.find('UserList')
  })

  test('it renders a <UserList />', () => {
    expect(userList).toHaveLength(1)
  })

  test('it passes its users prop to the <UserList />', () => {
    expect(userList.props().users).toEqual(users)
  })

  test('it calls getUsers() after mounting', () => {
    expect(actions.getUsers.mock.calls).toHaveLength(1)
  })
})
