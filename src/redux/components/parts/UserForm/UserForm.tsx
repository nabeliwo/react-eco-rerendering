import React, { FC } from 'react'
import styled from 'styled-components'

import { NameField } from '../../../containers/NameFieldContainer'
import { NameYomiField } from '../../../containers/NameYomiFieldContainer'
import { AgeField } from '../../../containers/AgeFieldContainer'
import { AttributesField } from '../../../containers/AttributesFieldContainer'

type Props = {
  avatar: string
  name: string
}

export const UserForm: FC<Props> = ({ avatar, name }) => {
  return (
    <>
      <Avatar>
        <img src={avatar} width="200" height="200" alt={name} />
      </Avatar>

      <Body>
        <FormList>
          <li>
            <NameField />
          </li>
          <li>
            <NameYomiField />
          </li>
          <li>
            <AgeField />
          </li>
          <li>
            <AttributesField />
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
