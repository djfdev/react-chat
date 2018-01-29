/* globals describe, test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import prettyDate from 'date-fns/distance_in_words_to_now'

import Message from './'

import { messages } from '../../api/data'

describe('Message', () => {
  const message = messages[0]
  const wrapper = shallow(<Message {...message} />)
  const text = wrapper.text()

  test("it renders the message's userName", () => {
    expect(text).toMatch(message.user.userName)
  })

  test("it renders the message's body", () => {
    expect(text).toMatch(message.body)
  })

  test("it renders the message's sentAt date", () => {
    expect(text).toMatch(prettyDate(message.sentAt))
  })

  test('it renders the avatar', () => {
    const image = wrapper.find('img')
    expect(image.prop('src')).toEqual(message.user.avatarUrl)
  })
})
