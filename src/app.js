import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'

const App = () => (
  <h1>Hello Winebored!</h1>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)