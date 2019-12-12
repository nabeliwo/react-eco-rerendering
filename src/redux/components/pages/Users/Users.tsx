import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { routes } from '../../../../routes'

import { Select } from '../../../containers/SelectContainer'
import { UserList } from '../../../containers/UserListContainer'

type Props = {
  hasUsers: boolean
}

export const Users: FC<Props> = ({ hasUsers }) => {
  const { user, editUser } = routes.root.children

  console.log('render Users')

  return (
    <Main>
      <Sidebar>
        {hasUsers ? (
          <>
            <SelectWrapper>
              <Select />
            </SelectWrapper>

            <UserList />
          </>
        ) : (
          <Fetching>取得中</Fetching>
        )}
      </Sidebar>

      <Body>
        <Switch>
          <Route exact path={user.path} component={user.component} />
          <Route exact path={editUser.path} component={editUser.component} />
          <Route path="*" render={() => <EmptyState>ユーザーを選択してください</EmptyState>} />
        </Switch>
      </Body>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  align-items: flex-start;
`
const Sidebar = styled.div`
  width: 200px;
`
const SelectWrapper = styled.div`
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
  height: 547px;
  font-size: 18px;
  text-align: center;
`
