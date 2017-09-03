import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from './containers/App'
import Posts from './components/Posts'

const Routes = (props) => (
  <Router {...props} history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/posts' component={Posts} />
    </Route>
  </Router>
)

export default Routes
