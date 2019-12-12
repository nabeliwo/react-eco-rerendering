import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { fetchUsers } from '../modules/user'

import { Users as UsersComponent } from '../components/pages/Users'

export const Users = () => {
  const dispatch = useDispatch()
  const { hasUsers } = useSelector(
    (state: State) => ({
      hasUsers: state.user.list.items.length > 0,
    }),
    shallowEqual,
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return <UsersComponent hasUsers={hasUsers} />
}
