import React, { FC } from 'react'
import styled from 'styled-components'

import { User } from '../../../modules/user'

import { Header } from '../../parts/Header'
import { UserList } from '../../parts/UserList'

type Props = {
  users: User[]
  order: string
  onChangeOrder: (value: string) => void
}

export const Users: FC<Props> = ({ users, order, onChangeOrder }) => {
  return (
    <>
      <Header />

      <Wrapper>
        <Main>
          <Sidebar>
            {users.length > 0 ? (
              <>
                <Select value={order} onChange={e => onChangeOrder(e.currentTarget.value)}>
                  <option value="name_asc">名前 昇順</option>
                  <option value="name_desc">名前 降順</option>
                  <option value="age_asc">年齢 昇順</option>
                  <option value="age_desc">年齢 降順</option>
                </Select>

                <UserList users={users} curerntUserId="" />
              </>
            ) : (
              <Fetching>取得中</Fetching>
            )}
          </Sidebar>

          <Body>
            <EmptyState>ユーザーを選択してください</EmptyState>
          </Body>
        </Main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`
const Main = styled.div`
  display: flex;
  align-items: center;
`
const Sidebar = styled.div`
  width: 200px;
`
const Select = styled.select`
  width: 100%;
  margin-bottom: 20px;
`
const Fetching = styled.p`
  font-size: 18px;
`
const Body = styled.div`
  flex: 1;
  padding-left: 40px;
`
const EmptyState = styled.p`
  font-size: 18px;
  text-align: center;
`
