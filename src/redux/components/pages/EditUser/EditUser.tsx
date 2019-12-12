import React, { FC } from 'react'
import styled from 'styled-components'

import { UserForm } from '../../../containers/UserFormContainer'
import { SubmitButton } from '../../../containers/SubmitButtonContainer'

type Props = {
  hasUser: boolean
}

export const EditUser: FC<Props> = ({ hasUser }) => {
  return (
    <>
      {hasUser ? (
        <>
          <UserForm />
          <SubmitButton />
        </>
      ) : (
        <EmptyState>ユーザーを選択してください</EmptyState>
      )}
    </>
  )
}

const EmptyState = styled.p`
  font-size: 18px;
  text-align: center;
`
