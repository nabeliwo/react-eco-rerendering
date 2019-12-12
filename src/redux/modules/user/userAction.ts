import { EditUserForm } from '../editUserForm'
import { User } from './userDomain'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_DONE = 'FETCH_USERS_DONE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const CHANGE_ORDER = 'CHANGE_ORDER'

export type FetchUsersAction = {
  type: typeof FETCH_USERS
}
export type FetchUsersDoneAction = {
  type: typeof FETCH_USERS_DONE
  payload: {
    users: User[]
  }
}
export type SetCurrentUserAction = {
  type: typeof SET_CURRENT_USER
  payload: {
    id: string
  }
}
export type UpdateCurrentUserAction = {
  type: typeof UPDATE_CURRENT_USER
  payload: {
    id: string
    userForm: EditUserForm
  }
}
export type ChangeOrderAction = {
  type: typeof CHANGE_ORDER
  payload: {
    order: string
  }
}

export function fetchUsers(): FetchUsersAction {
  return {
    type: FETCH_USERS,
  }
}
export function fetchUsersDone(users: User[]): FetchUsersDoneAction {
  return {
    type: FETCH_USERS_DONE,
    payload: { users },
  }
}
export function setCurrentUser(id: string): SetCurrentUserAction {
  return {
    type: SET_CURRENT_USER,
    payload: { id },
  }
}
export function updateCurrentUser(id: string, userForm: EditUserForm): UpdateCurrentUserAction {
  return {
    type: UPDATE_CURRENT_USER,
    payload: { id, userForm },
  }
}
export function changeOrder(order: string): ChangeOrderAction {
  return {
    type: CHANGE_ORDER,
    payload: { order },
  }
}

export type UserActionTypes =
  | FetchUsersAction
  | FetchUsersDoneAction
  | SetCurrentUserAction
  | UpdateCurrentUserAction
  | ChangeOrderAction
