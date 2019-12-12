import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { path } from '../../../../constants/application'

import { UserDetail } from '../../../containers/UserDetailContainer'

type Props = {
  userId: string
}

export const User: FC<Props> = ({ userId }) => {
  console.log('render User')

  if (!userId) return <EmptyState>ユーザーを選択してください</EmptyState>

  return (
    <>
      <UserDetail />
      <EditButton to={path.editUser(userId)}>編集</EditButton>
    </>
  )
}

const EditButton = styled(Link)`
  display: block;
  width: 160px;
  margin: 20px auto 0;
  background-color: #2e91d8;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
  text-align: center;

  &:hover {
    opacity: 0.7;
  }
`
const EmptyState = styled.p`
  height: 547px;
  font-size: 18px;
  text-align: center;
`
