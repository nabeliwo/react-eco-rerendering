import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { toggleAttribute } from '../modules/editUserForm'

import { AttributesField as AttributesFieldComponent } from '../components/parts/AttributesField'

export const AttributesField = () => {
  const dispatch = useDispatch()

  const { attributes } = useSelector(
    (state: State) => ({
      attributes: state.editUserForm.attributes,
    }),
    shallowEqual,
  )

  const handleToggleAttribute = useCallback(
    (id: string, checked: boolean) => {
      dispatch(toggleAttribute(id, checked))
    },
    [dispatch],
  )

  return <AttributesFieldComponent attributes={attributes} onChange={handleToggleAttribute} />
}
