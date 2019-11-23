import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import Home from './components/Home'
import Constituency from './components/Constituency'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/constituency/:id' component={Constituency} />
    </Switch>
  </BrowserRouter>




)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)