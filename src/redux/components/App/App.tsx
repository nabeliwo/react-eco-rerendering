import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { routes } from '../../../routes'

import { Header } from '../parts/Header'

export const App: FC<{}> = () => {
  const { root } = routes

  return (
    <>
      <GlobalStyle />

      <Header />

      <Wrapper>
        <Switch>
          <Route path={root.path} component={root.component} />
          <Route path="*" render={() => <p>404</p>} />
        </Switch>
      </Wrapper>
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
const Wrapper = styled.header`
  width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`
