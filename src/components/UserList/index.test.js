/* globals describe, test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import UserList from './'

import { users } from '../../api/data'

describe('UserList', () => {
  const wrapper = shallow(<UserList users={users} />)

  test('it renders a child for all users passed in', () => {
    expect(wrapper.children()).toHaveLength(users.length)
  })
})
