import React, { FC } from 'react'
import styled from 'styled-components'

import { User as UserType } from '../../../modules/user'
import { EditUserForm } from '../../../modules/editUserForm'

import { Header } from '../../parts/Header'
import { UserList } from '../../parts/UserList'
import { UserForm } from '../../parts/UserForm'

type Props = {
  users: UserType[]
  order: string
  currentUser: UserType | null
  editUserForm: EditUserForm
  onChangeOrder: (value: string) => void
  onChangeText: (key: 'name' | 'nameYomi' | 'age', value: string) => void
  onToggleAttribute: (id: string, checked: boolean) => void
  onSubmit: (userForm: EditUserForm) => void
}

export const EditUser: FC<Props> = ({
  users,
  order,
  currentUser,
  editUserForm,
  onChangeOrder,
  onChangeText,
  onToggleAttribute,
  onSubmit,
}) => {
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

                <UserList users={users} curerntUserId={currentUser ? currentUser.id : ''} />
              </>
            ) : (
              <Fetching>取得中</Fetching>
            )}
          </Sidebar>

          <Body>
            {currentUser ? (
              <>
                <UserForm
                  avatar={currentUser.avatar}
                  name={currentUser.name}
                  form={editUserForm}
                  onChangeText={onChangeText}
                  onToggleAttribute={onToggleAttribute}
                />
                <ChangeButton onClick={() => onSubmit(editUserForm)}>確定</ChangeButton>
              </>
            ) : (
              <EmptyState>ユーザーを選択してください</EmptyState>
            )}
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
  align-items: flex-start;
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
