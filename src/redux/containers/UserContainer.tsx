import React, { FC, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { match as Match } from 'react-router'

import { State } from '../modules/reducer'
import { fetchUsers, fetchUser, changeOrder } from '../modules/user'

import { User as UserComponent } from '../components/pages/User'

type Props = {
  match: Match<{ userId: string }>
}

export const User: FC<Props> = ({ match }) => {
  const dispatch = useDispatch()
  const { userId } = match.params

  const { users, user, order } = useSelector((state: State) => ({
    users: state.user.list.items,
    order: state.user.list.order,
    user: state.user.current,
  }))

  const handleChangeOrder = useCallback(
    (value: string) => {
      dispatch(changeOrder(value))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(fetchUsers())

    if (user) {
      if (user.id !== userId) dispatch(fetchUser(userId))
    } else {
      dispatch(fetchUser(userId))
    }
  }, [dispatch, user, userId])

  return <UserComponent users={users} order={order} currentUser={user} onChangeOrder={handleChangeOrder} />
}
