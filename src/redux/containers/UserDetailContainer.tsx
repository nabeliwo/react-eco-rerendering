import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'

import { UserDetail as UserDetailComponent } from '../components/parts/UserDetail'

export const UserDetail = () => {
  const { user } = useSelector(
    (state: State) => ({
      user: state.user.current,
    }),
    shallowEqual,
  )

  return <UserDetailComponent user={user} />
}
