import { User } from './userDomain'
import { UserActionTypes, FETCH_USERS_DONE } from './userAction'

export type UserState = {
  list: User[]
  current: User | null
}

const initialState: UserState = {
  list: [],
  current: null,
}

// eslint-disable-next-line default-param-last
export const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USERS_DONE:
      return {
        ...state,
        list: action.payload.users,
      }

    default:
      return state
  }
}
