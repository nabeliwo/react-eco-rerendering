import { History } from 'history'
import { combineReducers } from 'redux'

import { RouterState, createRouterReducer } from './router'
import { UserState, userReducer } from './user'

export type State = {
  router: RouterState
  user: UserState
}

export const createRootReducer = (history: History) => {
  return combineReducers({
    router: createRouterReducer(history),
    user: userReducer,
  })
}
