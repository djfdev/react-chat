/* globals describe, jest, test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import * as actions from '../../actions'

import { MessageFormContainer } from './'

import { currentUser } from '../../api/data'

describe('MessageFormContainer', () => {
  const wrapper = shallow(
    <MessageFormContainer
      actions={actions}
      currentMessage='foobar'
      currentUser={currentUser}
    />
  )
  const messageForm = wrapper.find('MessageForm')

  test('it renders a <MessageForm />', () => {
    expect(messageForm).toHaveLength(1)
  })

  test('it passes value, change & form handlers to the <MessageForm />', () => {
    expect(messageForm.props().value).toEqual('foobar')
    expect(messageForm.props().handleChange).toEqual(wrapper.instance().change)
    expect(messageForm.props().handleSubmit).toEqual(wrapper.instance().submit)
  })

  describe('#change', () => {
    test('it calls updateCurrentMessage(body) with current target value', () => {
      const currentValue = wrapper.props().value
      const fakeEvent = { target: { value: currentValue } }

      actions.updateCurrentMessage = jest.fn()

      wrapper.instance().change(fakeEvent)
      expect(actions.updateCurrentMessage).toBeCalledWith(currentValue)
    })
  })

  describe('#submit', () => {
    test('it calls createMessage(message) with the new message', () => {
      const fakeEvent = { preventDefault: () => {} }

      actions.createMessage = jest.fn()

      wrapper.instance().submit(fakeEvent)
      expect(actions.createMessage.mock.calls[0][0]).toMatchObject({
        user: currentUser,
        body: 'foobar'
      })
    })
  })
})
