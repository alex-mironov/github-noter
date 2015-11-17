import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'

import history from './utils/history'

import Main from './components/Main'
import Home from './components/Home'
import Profile from './components/Profile'

render(
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="profile/:username" component={Profile} />
      <Route path="*" component={Home} />
    </Route>
  </Router>,
  document.getElementById('app'))
