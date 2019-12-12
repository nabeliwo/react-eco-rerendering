import { History } from 'history'
import { combineReducers } from 'redux'

import { RouterState, createRouterReducer } from './router'
import { UserState, userReducer } from './user'
import { EditUserFormState, editUserFormReducer } from './editUserForm'

export type State = {
  router: RouterState
  user: UserState
  editUserForm: EditUserFormState
}

export const createRootReducer = (history: History) => {
  return combineReducers({
    router: createRouterReducer(history),
    user: userReducer,
    editUserForm: editUserFormReducer,
  })
}
