import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { fetchUsers, changeOrder } from '../modules/user'

import { Users as UsersComponent } from '../components/pages/Users'

export const Users = () => {
  const dispatch = useDispatch()
  const { users, order } = useSelector(
    (state: State) => ({
      users: state.user.list.items,
      order: state.user.list.order,
    }),
    shallowEqual,
  )

  const handleChangeOrder = useCallback(
    (value: string) => {
      dispatch(changeOrder(value))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return <UsersComponent users={users} order={order} onChangeOrder={handleChangeOrder} />
}
