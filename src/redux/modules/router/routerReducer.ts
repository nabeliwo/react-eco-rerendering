import { connectRouter } from 'connected-react-router'
export { RouterState } from 'connected-react-router'
import { History } from 'history'

export const createRouterReducer = (history: History) => connectRouter(history)
