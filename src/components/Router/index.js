import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../../pages/Home'
import baseStyles from '../../styles/'

class Router extends Component {
  render() {
    baseStyles()
    return (
      <div>
        <Route
          exact
          path="/"
          component={Home}
        />
      </div>
    )
  }
}

export default Router
