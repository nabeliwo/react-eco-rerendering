import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  age: string
  onChange: (value: string) => void
}

export const AgeField: FC<Props> = ({ age, onChange }) => {
  return (
    <>
      <Label>年齢</Label>
      <Input type="number" value={age} placeholder="年齢を入力してください" onChange={e => onChange(e.currentTarget.value)} />
    </>
  )
}

const Label = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`
const Input = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`
