import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { match as Match } from 'react-router'

import { State } from '../modules/reducer'
import { fetchUser } from '../modules/user'

import { User as UserComponent } from '../components/pages/User'

type Props = {
  match: Match<{ userId: string }>
}

export const User: FC<Props> = ({ match }) => {
  const dispatch = useDispatch()
  const { userId } = match.params

  const { currentUserId } = useSelector((state: State) => ({
    currentUserId: state.user.current ? state.user.current.id : '',
  }))

  useEffect(() => {
    if (currentUserId) {
      if (currentUserId !== userId) dispatch(fetchUser(userId))
    } else {
      dispatch(fetchUser(userId))
    }
  }, [currentUserId, dispatch, userId])

  return <UserComponent userId={currentUserId} />
}
