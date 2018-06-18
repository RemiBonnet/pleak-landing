import React from 'react'
import { NavigationStyle } from './style.js'
import Button from '../Button'

const Navigation = () => (
  <NavigationStyle>
    <div>
      <img src={process.env.PUBLIC_URL + '/logo-white.svg'} alt="Pleak logo" />
      <div className="Navigation__left">
        <a className="Link" href="">
          Documentation
        </a>
        <a
          className="Link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://medium.com/pleak"
        >
          Blog
        </a>
      </div>
      <div className="Navigation__right">
        <Button label="Github" url="" github />
        <a href="http://pleak-dashboard.herokuapp.com/" className="Link">
          Sign in
        </a>
      </div>
    </div>
  </NavigationStyle>
)

export default Navigation
