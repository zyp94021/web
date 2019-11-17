import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Router from '../client/Router'
import createStore from '../client/store'
export default (req, initState) => {
  const store = createStore(initState)
  return (
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Router />
      </StaticRouter>
    </Provider>
  )
}
