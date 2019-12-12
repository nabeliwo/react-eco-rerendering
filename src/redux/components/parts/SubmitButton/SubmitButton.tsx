import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
}

export const SubmitButton: FC<Props> = ({ onClick }) => {
  return <Wrapper onClick={() => onClick()}>確定</Wrapper>
}

const Wrapper = styled.button`
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
