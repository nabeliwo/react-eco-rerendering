import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { path } from '../../../../constants/application'

export const Header: FC<{}> = () => {
  return (
    <Wrapper>
      <Title>
        <Link to={path.root()}>何かのユーザーを見られる何か</Link>
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 50px;
  background-color: #2e91d8;
`
const Title = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
`
