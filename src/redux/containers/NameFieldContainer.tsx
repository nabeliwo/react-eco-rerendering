import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State } from '../modules/reducer'
import { updateText } from '../modules/editUserForm'

import { NameField as NameFieldComponent } from '../components/parts/NameField'

export const NameField = () => {
  const dispatch = useDispatch()

  const { name } = useSelector((state: State) => ({
    name: state.editUserForm.name,
  }))

  const handleUpdateName = useCallback(
    (value: string) => {
      dispatch(updateText('name', value))
    },
    [dispatch],
  )

  return <NameFieldComponent name={name} onChange={handleUpdateName} />
}
