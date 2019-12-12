import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { setUserForm } from '../modules/editUserForm'

import { EditUser as EditUserComponent } from '../components/pages/EditUser'

export const EditUser = () => {
  const dispatch = useDispatch()

  const { currentUser } = useSelector(
    (state: State) => ({
      currentUser: state.user.current,
    }),
    shallowEqual,
  )

  useEffect(() => {
    if (currentUser) dispatch(setUserForm(currentUser))
  }, [dispatch, currentUser])

  return <EditUserComponent hasUser={!!currentUser} />
}
