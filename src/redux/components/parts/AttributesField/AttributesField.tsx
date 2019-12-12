import React, { FC } from 'react'
import styled from 'styled-components'

import { attributes as attributeList } from '../../../modules/user'

type Props = {
  attributes: Map<string, string>
  onChange: (id: string, checked: boolean) => void
}

export const AttributesField: FC<Props> = ({ attributes, onChange }) => {
  return (
    <>
      <Label>タイプ</Label>

      <Attributes>
        {attributeList.map(attribute => (
          <li key={`form-${attribute.id}`}>
            <AttributeItem>
              <input
                type="checkbox"
                checked={attributes.has(attribute.id)}
                onChange={e => onChange(attribute.id, e.currentTarget.checked)}
              />
              <CheckBoxLabel>{attribute.name}</CheckBoxLabel>
            </AttributeItem>
          </li>
        ))}
      </Attributes>
    </>
  )
}

const Label = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
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
