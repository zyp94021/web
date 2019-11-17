import React from 'react'
import { Route, Link } from 'react-router-dom'
import Layout from './component/Layout'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
class Router extends React.Component {
  render() {
    return (
      <Layout>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Layout>
    )
  }
}

export default Router
