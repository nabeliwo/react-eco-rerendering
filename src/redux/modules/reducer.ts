import { History } from 'history'
import { combineReducers } from 'redux'

import { RouterState, createRouterReducer } from './router'
// import { HogeState, hogeReducer } from './hoge'

export type State = {
  router: RouterState
  // hoge: HogeState
}

export const createRootReducer = (history: History) => {
  return combineReducers({
    router: createRouterReducer(history),
    // hoge: hogeReducer,
  })
}
