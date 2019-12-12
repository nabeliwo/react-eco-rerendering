import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  nameYomi: string
  onChange: (value: string) => void
}

export const NameYomiField: FC<Props> = ({ nameYomi, onChange }) => {
  return (
    <>
      <Label>名前（カナ）</Label>
      <Input type="text" value={nameYomi} placeholder="カナを入力してください" onChange={e => onChange(e.currentTarget.value)} />
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
