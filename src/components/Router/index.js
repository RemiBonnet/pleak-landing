import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../../pages/Home'
import baseStyles from '../../styles/'

class Router extends Component {
  render() {
    baseStyles()

    return this.props.children(<Route path="/:locale?" component={Home} />)
  }
}

export default Router
