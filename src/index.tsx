/// globals mode
import 'babel-polyfill'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// Redux
import { createRootReducer } from 'reducers/index'
import { applyMiddleware, compose, createStore } from 'redux'
// Saga
import createSagaMiddleware from '@redux-saga/core'

// Components
import { App } from './app'
import { rootSaga } from 'sagas/index'

interface IDevtoolsWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
}

// Defined in webpack config
declare const mode
// This allows the redux devtools extension to work
const win: IDevtoolsWindow = window
const enhancers = (mode === 'development' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  createRootReducer(),
  enhancers(
    applyMiddleware(sagaMiddleware)
  )
)

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
)

sagaMiddleware.run(rootSaga)
