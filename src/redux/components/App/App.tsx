import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { routes } from '../../../routes'

const { root, users, user, editUser } = routes

export const App: FC<{}> = () => {
  return (
    <>
      <GlobalStyle />

      <Switch>
        <Route exact path={root.path} component={root.component} />
        <Route exact path={users.path} component={users.component} />
        <Route exact path={user.path} component={user.component} />
        <Route exact path={editUser.path} component={editUser.component} />
        <Route path="*" render={() => <p>404</p>} />
      </Switch>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }
  body {
    min-height: 100vh;
    background-color: #e5f0ff;
    word-wrap: break-word;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, 'メイリオ', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  input, button, textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
`
