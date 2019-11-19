import React from 'react'
import { Route, Link } from 'react-router-dom'
import Layout from './component/Layout'
import routerConfig from './router.config'
class Router extends React.Component {
  render() {
    return (
      <Layout>
        {routerConfig.map(router => (
          <Route
            path={router.path}
            component={router.component}
            key={router.path}
          />
        ))}
      </Layout>
    )
  }
}

export default Router
