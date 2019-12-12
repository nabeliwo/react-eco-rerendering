import React, { FC, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State } from '../modules/reducer'
import { User, setCurrentUser } from '../modules/user'

import { UserListItem as UserListItemComponent } from '../components/parts/UserListItem'

type Props = {
  user: User
}

export const UserListItem: FC<Props> = ({ user }) => {
  const dispatch = useDispatch()

  const { currentUserId } = useSelector((state: State) => ({
    currentUserId: state.user.current ? state.user.current.id : '',
  }))

  const handleClickUser = useCallback(
    (id: string) => {
      dispatch(setCurrentUser(id))
    },
    [dispatch],
  )

  return (
    <UserListItemComponent
      id={user.id}
      avatar={user.avatar}
      name={user.name}
      currentUserId={currentUserId}
      onClick={handleClickUser}
    />
  )
}
