import React, { FC } from 'react'
import styled from 'styled-components'

import { attributes } from '../../../modules/user'
import { EditUserForm } from '../../../modules/editUserForm'

type Props = {
  avatar: string
  name: string
  form: EditUserForm
  onChangeText: (key: 'name' | 'nameYomi' | 'age', value: string) => void
  onToggleAttribute: (id: string, checked: boolean) => void
}

export const UserForm: FC<Props> = ({ avatar, name, form, onChangeText, onToggleAttribute }) => {
  return (
    <>
      <Avatar>
        <img src={avatar} width="200" height="200" alt={name} />
      </Avatar>

      <Body>
        <FormList>
          <li>
            <Label>名前</Label>
            <Input
              type="text"
              value={form.name}
              placeholder="名前を入力してください"
              onChange={e => onChangeText('name', e.currentTarget.value)}
            />
          </li>
          <li>
            <Label>名前（カナ）</Label>
            <Input
              type="text"
              value={form.nameYomi}
              placeholder="カナを入力してください"
              onChange={e => onChangeText('nameYomi', e.currentTarget.value)}
            />
          </li>
          <li>
            <Label>年齢</Label>
            <Input
              type="number"
              value={form.age}
              placeholder="年齢を入力してください"
              onChange={e => onChangeText('age', e.currentTarget.value)}
            />
          </li>
          <li>
            <Label>タイプ</Label>

            <Attributes>
              {attributes.map(attribute => (
                <li key={`form-${attribute.id}`}>
                  <AttributeItem>
                    <input
                      type="checkbox"
                      checked={form.attributes.has(attribute.id)}
                      onChange={e => onToggleAttribute(attribute.id, e.currentTarget.checked)}
                    />
                    <CheckBoxLabel>{attribute.name}</CheckBoxLabel>
                  </AttributeItem>
                </li>
              ))}
            </Attributes>
          </li>
        </FormList>
      </Body>
    </>
  )
}

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  background-color: #fff;
`
const Body = styled.div`
  padding: 20px;
  background-color: #fff;
`
const FormList = styled.ul`
  > li {
    padding-bottom: 10px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`
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
const Attributes = styled.ul`
  margin: -5px -6px;

  > li {
    display: inline-block;
    margin: 5px 6px;
    font-size: 14px;
  }
`
const AttributeItem = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const CheckBoxLabel = styled.p`
  margin-left: 6px;
  font-size: 16px;
`
