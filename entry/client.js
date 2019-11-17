import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from '../client/Router'
import createStore from '../client/store'
const initState = window.__STATE__ || { title: 'client' }
const store = createStore(initState)
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
