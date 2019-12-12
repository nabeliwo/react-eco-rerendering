import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  onChange: (value: string) => void
}

export const NameField: FC<Props> = ({ name, onChange }) => {
  return (
    <>
      <Label>名前</Label>
      <Input type="text" value={name} placeholder="名前を入力してください" onChange={e => onChange(e.currentTarget.value)} />
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
