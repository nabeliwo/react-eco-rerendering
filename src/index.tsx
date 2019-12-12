import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { configureStore, history } from './redux/store/configureStore'
import { App } from './redux/components/App'

const store = configureStore({})

const render = (AppComponent: typeof App) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppComponent />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./redux/components/App', () => {
    const { App: AppComponent }: { App: typeof App } = require('./redux/components/App')
    render(AppComponent)
  })
}
