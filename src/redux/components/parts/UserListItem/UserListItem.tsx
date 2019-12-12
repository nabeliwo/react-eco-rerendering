import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { path } from '../../../../constants/application'

type Props = {
  id: string
  avatar: string
  name: string
  currentUserId: string
}

export const UserListItem: FC<Props> = ({ id, avatar, name, currentUserId }) => {
  return (
    <UserLink to={path.user(id)} className={id === currentUserId ? 'active' : ''}>
      <Avatar src={avatar} width="30" height="30" alt={name} />
      <Name>{name}</Name>
    </UserLink>
  )
}

const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;

  &.active,
  &:hover {
    background-color: #2e91d8;
    color: #fff;
  }
`
const Avatar = styled.img`
  margin-right: 10px;
  background-color: #fff;
`
const Name = styled.p`
  font-size: 16px;
`
