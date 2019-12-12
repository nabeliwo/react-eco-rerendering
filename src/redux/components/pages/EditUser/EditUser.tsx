import React, { FC } from 'react'
import styled from 'styled-components'

import { EditUserForm } from '../../../modules/editUserForm'

import { UserForm } from '../../../containers/UserFormContainer'

type Props = {
  hasUser: boolean
  editUserForm: EditUserForm
  onSubmit: (userForm: EditUserForm) => void
}

export const EditUser: FC<Props> = ({ hasUser, editUserForm, onSubmit }) => {
  return (
    <>
      {hasUser ? (
        <>
          <UserForm />
          <ChangeButton onClick={() => onSubmit(editUserForm)}>確定</ChangeButton>
        </>
      ) : (
        <EmptyState>ユーザーを選択してください</EmptyState>
      )}
    </>
  )
}

const ChangeButton = styled.button`
  display: block;
  width: 160px;
  margin: 20px auto 0;
  background-color: #2e91d8;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
const EmptyState = styled.p`
  font-size: 18px;
  text-align: center;
`
