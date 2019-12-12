import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { State } from '../modules/reducer'
import { User } from '../modules/user'

import { UserListItem as UserListItemComponent } from '../components/parts/UserListItem'

type Props = {
  user: User
}

export const UserListItem: FC<Props> = ({ user }) => {
  const { currentUserId } = useSelector((state: State) => ({
    currentUserId: state.user.current ? state.user.current.id : '',
  }))

  return <UserListItemComponent id={user.id} avatar={user.avatar} name={user.name} currentUserId={currentUserId} />
}
