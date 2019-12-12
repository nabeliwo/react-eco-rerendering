import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State } from '../modules/reducer'
import { updateText } from '../modules/editUserForm'

import { NameYomiField as NameYomiFieldComponent } from '../components/parts/NameYomiField'

export const NameYomiField = () => {
  const dispatch = useDispatch()

  const { nameYomi } = useSelector((state: State) => ({
    nameYomi: state.editUserForm.nameYomi,
  }))

  const handleUpdateNameYomi = useCallback(
    (value: string) => {
      dispatch(updateText('nameYomi', value))
    },
    [dispatch],
  )

  return <NameYomiFieldComponent nameYomi={nameYomi} onChange={handleUpdateNameYomi} />
}
