import React, { FC } from 'react'
import styled from 'styled-components'

import { Header } from '../../parts/Header'

export const Users: FC<{}> = () => {
  return (
    <>
      <Header />
      <Wrapper>users</Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  padding: 20px;
`
