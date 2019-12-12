import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { updateText } from '../modules/editUserForm'

import { AgeField as AgeFieldComponent } from '../components/parts/AgeField'

export const AgeField = () => {
  const dispatch = useDispatch()

  const { age } = useSelector(
    (state: State) => ({
      age: state.editUserForm.age,
    }),
    shallowEqual,
  )

  const handleUpdateName = useCallback(
    (value: string) => {
      dispatch(updateText('age', value))
    },
    [dispatch],
  )

  return <AgeFieldComponent age={age} onChange={handleUpdateName} />
}
