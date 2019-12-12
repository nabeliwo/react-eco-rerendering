import { User } from './userDomain'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_DONE = 'FETCH_USERS_DONE'
export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_DONE = 'FETCH_USER_DONE'

export type FetchUsersAction = {
  type: typeof FETCH_USERS
}
export type FetchUsersDoneAction = {
  type: typeof FETCH_USERS_DONE
  payload: {
    users: User[]
  }
}
export type FetchUserAction = {
  type: typeof FETCH_USER
  payload: {
    id: string
  }
}
export type FetchUserDoneAction = {
  type: typeof FETCH_USER_DONE
  payload: {
    user: User
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
export function fetchUser(id: string): FetchUserAction {
  return {
    type: FETCH_USER,
    payload: { id },
  }
}
export function fetchUserDone(user: User): FetchUserDoneAction {
  return {
    type: FETCH_USER_DONE,
    payload: { user },
  }
}

export type UserActionTypes = FetchUsersAction | FetchUsersDoneAction | FetchUserAction | FetchUserDoneAction
