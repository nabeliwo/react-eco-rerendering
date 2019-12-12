import React from 'react'
import { useSelector } from 'react-redux'

import { State } from '../modules/reducer'

import { UserList as UserListComponent } from '../components/parts/UserList'

export const UserList = () => {
  const { users } = useSelector((state: State) => ({
    users: state.user.list.items,
  }))

  return <UserListComponent users={users} />
}
