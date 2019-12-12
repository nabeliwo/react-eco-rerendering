import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  id: string
  avatar: string
  name: string
  currentUserId: string
  onClick: (id: string) => void
}

export const UserListItem: FC<Props> = ({ id, avatar, name, currentUserId, onClick }) => {
  return (
    <UserButton className={id === currentUserId ? 'active' : ''} onClick={() => onClick(id)}>
      <Avatar src={avatar} width="30" height="30" alt={name} />
      <Name>{name}</Name>
    </UserButton>
  )
}

const UserButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;

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
