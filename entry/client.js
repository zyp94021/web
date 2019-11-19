import 'react-hot-loader'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Router from '../client/Router'
import createStore from '../client/store'
const initState = window.__STATE__
const store = createStore(initState)
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
)
ReactDom.render(React.createElement(hot(App)), document.getElementById('app'))
