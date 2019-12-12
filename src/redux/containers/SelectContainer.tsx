import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { State } from '../modules/reducer'
import { changeOrder } from '../modules/user'

import { Select as SelectComponent } from '../components/parts/Select'

export const Select = () => {
  const dispatch = useDispatch()
  const { order } = useSelector(
    (state: State) => ({
      order: state.user.list.order,
    }),
    shallowEqual,
  )

  const handleChangeOrder = useCallback(
    (value: string) => {
      dispatch(changeOrder(value))
    },
    [dispatch],
  )

  return <SelectComponent order={order} onChangeOrder={handleChangeOrder} />
}
