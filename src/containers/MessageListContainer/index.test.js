/* globals describe, beforeEach, jest, test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import * as actions from '../../actions'

import { MessageListContainer } from './'

import { messages } from '../../api/data'

describe('MessageListContainer', () => {
  let wrapper
  let messageList

  beforeEach(() => {
    actions.getMessages = jest.fn()
    wrapper = shallow(
      <MessageListContainer actions={actions} messages={messages} />
    )
    messageList = wrapper.find('MessageList')
  })

  test('it renders a <MessageList />', () => {
    expect(messageList).toHaveLength(1)
  })

  test('it passes its messages prop to the <MessageList />', () => {
    expect(messageList.props().messages).toEqual(messages)
  })

  test('it calls getMessages() after mounting', () => {
    expect(actions.getMessages.mock.calls).toHaveLength(1)
  })
})
