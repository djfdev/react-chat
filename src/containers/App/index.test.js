/* globals describe, test, expect */
import React from 'react'
import { mount } from 'enzyme'

import App from './'

describe('App', () => {
  const mountedApp = mount(<App />)

  test('it renders a <Provider /> with a single child', () => {
    const provider = mountedApp.find('Provider')
    expect(mountedApp.find('Provider')).toHaveLength(1)
    expect(provider.children()).toHaveLength(1)
  })

  test('it renders a <UserListContainer />', () => {
    expect(mountedApp.find('UserListContainer')).toHaveLength(1)
  })

  test('it renders a <MessageListContainer />', () => {
    expect(mountedApp.find('MessageListContainer')).toHaveLength(1)
  })

  test('it renders a <MessageFormContainer />', () => {
    expect(mountedApp.find('MessageFormContainer')).toHaveLength(1)
  })

  describe('#toggleDrawer', () => {
    test('toggles the drawer input checked/unchecked', () => {
      const toggle = mountedApp.find('.app__drawer-open')
      toggle.simulate('click')

      expect(mountedApp.find('input[type="checkbox"]').props().checked)
        .toBe(true)

      toggle.simulate('click')

      expect(mountedApp.find('input[type="checkbox"]').props().checked)
        .toBe(false)
    })
  })
})
