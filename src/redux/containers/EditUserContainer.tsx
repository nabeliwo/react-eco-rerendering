import React, { FC, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { match as Match } from 'react-router'

import { State } from '../modules/reducer'
import { fetchUser } from '../modules/user'
import { setUserForm, EditUserForm, submitEditUserForm } from '../modules/editUserForm'

import { EditUser as EditUserComponent } from '../components/pages/EditUser'

type Props = {
  match: Match<{ userId: string }>
}

export const EditUser: FC<Props> = ({ match }) => {
  const dispatch = useDispatch()
  const { userId } = match.params

  const { currentUser, editUserForm } = useSelector((state: State) => ({
    currentUser: state.user.current,
    editUserForm: state.editUserForm,
  }))

  const handleSubmit = useCallback(
    (userForm: EditUserForm) => {
      dispatch(submitEditUserForm(userId, userForm))
    },
    [dispatch, userId],
  )

  useEffect(() => {
    if (userId) dispatch(fetchUser(userId))
    if (currentUser) dispatch(setUserForm(currentUser))
  }, [dispatch, currentUser, userId])

  return <EditUserComponent hasUser={!!currentUser} editUserForm={editUserForm} onSubmit={handleSubmit} />
}
