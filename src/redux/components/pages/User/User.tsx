import React, { FC } from 'react'
import styled from 'styled-components'

import { UserDetail } from '../../../containers/UserDetailContainer'

type Props = {
  userId: string
  onClickEdit: () => void
}

export const User: FC<Props> = ({ userId, onClickEdit }) => {
  if (!userId) return <EmptyState>ユーザーを選択してください</EmptyState>

  return (
    <>
      <UserDetail />
      <EditButton onClick={onClickEdit}>編集</EditButton>
    </>
  )
}

const EditButton = styled.button`
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
