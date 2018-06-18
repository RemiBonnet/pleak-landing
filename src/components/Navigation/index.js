import React from 'react'
import { NavigationStyle } from './style.js'
import Button from '../Button'

const Navigation = () => (
  <NavigationStyle>
    <div>
      <img src={process.env.PUBLIC_URL + '/logo-white.svg'} alt="Pleak logo" />
      <div className="Navigation__left">
<<<<<<< HEAD
        <a className="Link" rel="noopener noreferrer" target="_blank" href="https://github.com/pleak/pleak-react-perf-monitor/blob/master/README.md">Documentation</a>
        <a className="Link" rel="noopener noreferrer" target="_blank" href="https://medium.com/pleak">Blog</a>
      </div>
      <div className="Navigation__right">
        <Button
          label="Request a demo"
          demo
        />
        <a href="http://pleak-dashboard.herokuapp.com/" className="Link">Sign in</a>
=======
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
>>>>>>> 9c2e07688c5eb0aa6090495930af07a941ac95b1
      </div>
    </div>
  </NavigationStyle>
)

export default Navigation
