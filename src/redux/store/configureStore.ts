import { createBrowserHistory } from 'history'
import { compose, applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'

import { rootSaga } from '../modules/saga'
import { createRootReducer } from '../modules/reducer'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const createEnhancer = () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    : compose

  return composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history), logger))
}

export const configureStore = (preloadedState: object = {}) => {
  const store: Store & {
    runSaga: SagaMiddleware<typeof rootSaga>['run']
  } = createStore(createRootReducer(history), preloadedState, createEnhancer())

  let sagaTask = sagaMiddleware.run(rootSaga)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('../modules/reducer', () => {
      const {
        createRootReducer: createNextRootReducer,
      }: { createRootReducer: typeof createRootReducer } = require('../modules/reducer')
      store.replaceReducer(createNextRootReducer(history))
    })

    module.hot.accept('../modules/saga', () => {
      const { rootSaga: nextRootSaga } = require('../modules/saga')

      sagaTask.cancel()
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(nextRootSaga)
      })
    })
  }

  return store
}
