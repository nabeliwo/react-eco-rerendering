import { User } from '../redux/modules/user'

const users: User[] = [
  {
    id: 'user-1',
    avatar: '/images/user_1.png',
    name: '森川咲子',
    age: 18,
    attributes: [],
  },
]

export const getUsers = new Promise(resolve => setTimeout(() => resolve(users), 2000))
