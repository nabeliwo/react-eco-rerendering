import React from 'react'
import { useSelector } from 'react-redux'

import { State } from '../modules/reducer'

import { UserForm as UserFormComponent } from '../components/parts/UserForm'

export const UserForm = () => {
  const { avatar, name } = useSelector((state: State) => ({
    avatar: state.user.current ? state.user.current.avatar : '',
    name: state.user.current ? state.user.current.name : '',
  }))

  return <UserFormComponent avatar={avatar} name={name} />
}
