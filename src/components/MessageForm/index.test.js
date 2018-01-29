/* globals describe, jest, test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import MessageForm from './'

describe('MessageForm', () => {
  const changeStub = jest.fn()
  const submitStub = jest.fn()

  const wrapper = shallow(
    <MessageForm
      value='foo'
      handleChange={changeStub}
      handleSubmit={submitStub}
    />
  )

  test('it renders a form with the submit handler', () => {
    expect(wrapper.find('form').props().onSubmit).toEqual(submitStub)
  })

  test('it renders an input with the value and change handler', () => {
    const input = wrapper.find('input')

    expect(input.props().value).toEqual('foo')
    expect(input.props().onChange).toEqual(changeStub)
  })
})
