import React, { FC } from 'react'
import styled from 'styled-components'

import { Select } from '../../../containers/SelectContainer'
import { UserList } from '../../../containers/UserListContainer'
import { User } from '../../../containers/UserContainer'
import { EditUser } from '../../../containers/EditUserContainer'

type Props = {
  hasUsers: boolean
  viewMode: 'show' | 'edit'
}

export const Users: FC<Props> = ({ hasUsers, viewMode }) => {
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

      <Body>{viewMode === 'show' ? <User /> : <EditUser />}</Body>
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
