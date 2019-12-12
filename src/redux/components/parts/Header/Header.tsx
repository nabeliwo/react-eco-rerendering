import React, { FC } from 'react'
import styled from 'styled-components'

export const Header: FC<{}> = () => {
  return (
    <Wrapper>
      <Title>何かのユーザーを見られる何か</Title>
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
