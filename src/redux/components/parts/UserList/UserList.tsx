import React, { FC } from 'react'
import styled from 'styled-components'

import { User } from '../../../modules/user'

import { UserListItem } from '../../../containers/UserListItemContainer'

type Props = {
  users: User[]
}

export const UserList: FC<Props> = ({ users }) => {
  return (
    <Wrapper>
      {users.map(user => (
        <li key={user.id}>
          <UserListItem user={user} />
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
