import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from './containers/App'
import Posts from './components/Posts'
import AddPost from './components/AddPost'

const Routes = (props) => (
  <Router {...props} history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/posts' component={Posts} />
      <Route path='/add-post' component={AddPost} />
    </Route>
  </Router>
)

export default Routes
