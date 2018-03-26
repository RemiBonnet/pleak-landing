import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TransitionSwitch from '../../containers/TransitionSwitch'
import AnimatedWrapper from '../../containers/AnimatedWrapper'
import Navigation from '../../components/Navigation'
import Home from '../../pages/Home'
import baseStyles from '../../styles/'

class Router extends Component {
  render() {
    baseStyles()
    return (
      <div>
        <Navigation />
        <TransitionSwitch>
          <Route
            exact
            path="/"
            component={AnimatedWrapper(Home)}
          />
        </TransitionSwitch>
      </div>
    )
  }
}

export default Router
