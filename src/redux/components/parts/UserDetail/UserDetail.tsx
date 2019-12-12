import React, { FC } from 'react'
import styled from 'styled-components'

import { User } from '../../../modules/user'

type Props = {
  user: User | null
}

export const UserDetail: FC<Props> = ({ user }) => {
  if (!user) return null

  return (
    <>
      <Avatar>
        <img src={user.avatar} width="200" height="200" alt={user.name} />
      </Avatar>

      <Body>
        <InfoList>
          <li>
            <Label>名前</Label>
            <Value>{user.name}</Value>
          </li>
          <li>
            <Label>名前（カナ）</Label>
            <Value>{user.nameYomi}</Value>
          </li>
          <li>
            <Label>年齢</Label>
            <Value>{user.age}</Value>
          </li>
          <li>
            <Label>タイプ</Label>
            <Attributes>
              {user.attributes.map(attribute => (
                <li key={`${user.id}-${attribute.id}`} className={attribute.id}>
                  {attribute.name}
                </li>
              ))}
            </Attributes>
          </li>
        </InfoList>
      </Body>
    </>
  )
}

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  background-color: #fff;
`
const Body = styled.div`
  padding: 20px;
  background-color: #fff;
`
const InfoList = styled.ul`
  > li {
    padding-bottom: 10px;
    border-bottom: 1px dotted #ccc;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`
const Label = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`
const Value = styled.p`
  font-size: 18px;
`
const Attributes = styled.ul`
  margin: -5px;

  > li {
    display: inline-block;
    margin: 5px;
    padding: 4px 6px;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;

    &.attribute-1 {
      background-color: #aeaeae;
    }
    &.attribute-2 {
      background-color: #ffa766;
    }
    &.attribute-3 {
      background-color: #64c5f7;
    }
    &.attribute-4 {
      background-color: #e7d400;
    }
    &.attribute-5 {
      background-color: #9ac30e;
    }
    &.attribute-6 {
      background-color: #60e9f5;
    }
    &.attribute-7 {
      background-color: #ee6969;
    }
    &.attribute-8 {
      background-color: #ab7aca;
    }
    &.attribute-9 {
      background-color: #c8a841;
    }
    &.attribute-10 {
      background-color: #64a7f1;
    }
    &.attribute-11 {
      background-color: #eb7ff4;
    }
    &.attribute-12 {
      background-color: #51cb5a;
    }
    &.attribute-13 {
      background-color: #fac727;
    }
    &.attribute-14 {
      background-color: #756eb4;
    }
    &.attribute-15 {
      background-color: #ff8859;
    }
    &.attribute-16 {
      background-color: #6881d4;
    }
    &.attribute-17 {
      background-color: #818aa4;
    }
    &.attribute-18 {
      background-color: #fc7799;
    }
  }
`
