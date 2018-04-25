import React from 'react'
import { NavigationStyle } from './style.js'

const Navigation = () => (
  <NavigationStyle>
    <div className="Container">
      <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Pleak logo" />
      <h1>Pleak</h1>
    </div>
  </NavigationStyle>
)

export default Navigation
