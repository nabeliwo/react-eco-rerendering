import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { path } from '../../../../constants/application'
import { User } from '../../../modules/user'

type Props = {
  users: User[]
  curerntUserId: string
}

export const UserList: FC<Props> = ({ users, curerntUserId }) => {
  return (
    <Wrapper>
      {users.map(user => (
        <li key={user.id}>
          <UserLink to={path.user(user.id)} className={user.id === curerntUserId ? 'active' : ''}>
            <Avatar src={user.avatar} width="30" height="30" alt={user.name} />
            <Name>{user.name}</Name>
          </UserLink>
        </li>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  background-color: #fff;

  > li:not(:first-child) {
    border-top: 1px solid #e5f0ff;
  }
`
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
