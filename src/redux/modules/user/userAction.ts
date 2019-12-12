import { User } from './userDomain'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_DONE = 'FETCH_USERS_DONE'

export type FetchUsersAction = {
  type: typeof FETCH_USERS
}
export type FetchUsersDoneAction = {
  type: typeof FETCH_USERS_DONE
  payload: {
    users: User[]
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

export type UserActionTypes = FetchUsersAction | FetchUsersDoneAction
