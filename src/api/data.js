// provides data for the mock API and testing

import _ from 'lodash'
import faker from 'faker'

const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(today.getDate() - 1)

const userBase = Array.from({
  length: _.random(10, 20)
}, (x, i) => {
  return {
    userName: faker.internet.userName(),
    avatarUrl: faker.internet.avatar()
  }
})

export const messages = Array.from({
  length: _.random(20, 30)
}, (x, i) => {
  return {
    id: i,
    user: _.sample(userBase),
    body: faker.lorem.sentences(),
    sentAt: faker.date.between(yesterday, today)
  }
}).sort((a, b) => a.sentAt - b.sentAt)

export const currentUser = {
  userName: 'You',
  avatarUrl: faker.internet.avatar()
}

export const users = userBase.concat(currentUser)
