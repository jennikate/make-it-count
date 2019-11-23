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
      <Route exact path='/make-it-count' component={Home} />
      <Route exact path='/make-it-count/constituency/:id' component={Constituency} />
    </Switch>
  </BrowserRouter>




)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)