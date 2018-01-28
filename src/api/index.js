import { users } from './data'

export const getUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users)
    }, 200)
  })
}
