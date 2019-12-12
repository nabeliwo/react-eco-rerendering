import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  order: string
  onChangeOrder: (value: string) => void
}

export const Select: FC<Props> = ({ order, onChangeOrder }) => {
  return (
    <Wrapper value={order} onChange={e => onChangeOrder(e.currentTarget.value)}>
      <option value="name_asc">名前 昇順</option>
      <option value="name_desc">名前 降順</option>
      <option value="age_asc">年齢 昇順</option>
      <option value="age_desc">年齢 降順</option>
    </Wrapper>
  )
}

const Wrapper = styled.select`
  width: 100%;
`
