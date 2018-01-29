/* globals describe, test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import MessageList from './'

import { messages } from '../../api/data'

describe('MessageList', () => {
  const wrapper = shallow(<MessageList messages={messages} />)

  test('it renders a <Message /> for each message passed in', () => {
    expect(wrapper.find('Message')).toHaveLength(messages.length)
  })

  test('it passes the current message as props for each <Message />', () => {
    wrapper.find('Message').forEach((messageComponent, i) => {
      expect(messageComponent.props()).toEqual(messages[i])
    })
  })
})
