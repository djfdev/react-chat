/* globals describe, test, expect */
import React from 'react'
import { mount } from 'enzyme'

import App from './'

describe('App', () => {
  const mountedApp = mount(<App />)

  test('it renders a <Provider />', () => {
    expect(mountedApp.find('Provider')).toHaveLength(1)
  })

  test('it renders a <UserListContainer />', () => {
    expect(mountedApp.find('UserListContainer')).toHaveLength(1)
  })
})
