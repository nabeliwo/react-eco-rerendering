import React, { FC, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { match as Match } from 'react-router'

import { State } from '../modules/reducer'
import { fetchUsers, fetchUser } from '../modules/user'

import { EditUser as EditUserComponent } from '../components/pages/EditUser'
import { setUserForm, updateText, toggleAttribute, EditUserForm, submitEditUserForm } from '../modules/editUserForm'

type Props = {
  match: Match<{ userId: string }>
}

export const EditUser: FC<Props> = ({ match }) => {
  const dispatch = useDispatch()
  const { userId } = match.params

  const { users, user, editUserForm } = useSelector((state: State) => ({
    users: state.user.list,
    user: state.user.current,
    editUserForm: state.editUserForm,
  }))

  const handleUpdateText = useCallback(
    (key: 'name' | 'nameYomi' | 'age', value: string) => {
      dispatch(updateText(key, value))
    },
    [dispatch],
  )
  const handleToggleAttribute = useCallback(
    (id: string, checked: boolean) => {
      dispatch(toggleAttribute(id, checked))
    },
    [dispatch],
  )
  const handleSubmit = useCallback(
    (userForm: EditUserForm) => {
      dispatch(submitEditUserForm(userId, userForm))
    },
    [dispatch, userId],
  )

  useEffect(() => {
    dispatch(fetchUsers())
    if (userId) dispatch(fetchUser(userId))
    if (user) dispatch(setUserForm(user))
  }, [dispatch, user, userId])

  return (
    <EditUserComponent
      users={users}
      currentUser={user}
      editUserForm={editUserForm}
      onChangeText={handleUpdateText}
      onToggleAttribute={handleToggleAttribute}
      onSubmit={handleSubmit}
    />
  )
}
