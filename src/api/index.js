import { messages, users } from './data'

export const getUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users)
    }, 200)
  })
}

export const getMessages = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messages)
    }, 200)
  })
}

export const createMessage = message => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message)
    }, 200)
  })
}
