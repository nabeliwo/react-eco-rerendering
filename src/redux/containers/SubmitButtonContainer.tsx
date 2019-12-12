import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { submitEditUserForm } from '../modules/editUserForm'

import { SubmitButton as SubmitButtonComponent } from '../components/parts/SubmitButton'

export const SubmitButton = () => {
  const dispatch = useDispatch()

  const { userId, editUserForm } = useSelector(
    (state: State) => ({
      userId: state.user.current!.id,
      editUserForm: state.editUserForm,
    }),
    shallowEqual,
  )

  const handleSubmit = useCallback(() => {
    dispatch(submitEditUserForm(userId, editUserForm))
  }, [dispatch, editUserForm, userId])

  return <SubmitButtonComponent onClick={handleSubmit} />
}
