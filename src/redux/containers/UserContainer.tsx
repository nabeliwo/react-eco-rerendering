import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { changeViewMode } from '../modules/view'

import { User as UserComponent } from '../components/pages/User'

export const User = () => {
  const dispatch = useDispatch()
  const { currentUserId } = useSelector(
    (state: State) => ({
      currentUserId: state.user.current ? state.user.current.id : '',
    }),
    shallowEqual,
  )

  const handleClickEdit = () => {
    dispatch(changeViewMode('edit'))
  }

  return <UserComponent userId={currentUserId} onClickEdit={handleClickEdit} />
}
