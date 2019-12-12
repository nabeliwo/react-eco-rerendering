import { combineReducers } from 'redux'

import { UserState, userReducer } from './user'
import { EditUserFormState, editUserFormReducer } from './editUserForm'
import { ViewState, viewReducer } from './view'

export type State = {
  user: UserState
  editUserForm: EditUserFormState
  view: ViewState
}

export const createRootReducer = () => {
  return combineReducers({
    user: userReducer,
    editUserForm: editUserFormReducer,
    view: viewReducer,
  })
}
