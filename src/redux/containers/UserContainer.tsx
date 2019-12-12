import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { match as Match } from 'react-router'

import { State } from '../modules/reducer'
import { fetchUsers, fetchUser } from '../modules/user'

import { User as UserComponent } from '../components/pages/User'

type Props = {
  match: Match<{ userId: string }>
}

export const User: FC<Props> = ({ match }) => {
  const dispatch = useDispatch()
  const { userId } = match.params

  const { users, user } = useSelector((state: State) => ({
    users: state.user.list,
    user: state.user.current,
  }))

  useEffect(() => {
    dispatch(fetchUsers())

    if (user) {
      if (user.id !== userId) dispatch(fetchUser(userId))
    } else {
      dispatch(fetchUser(userId))
    }
  }, [dispatch, user, userId])

  return <UserComponent users={users} currentUser={user} />
}
