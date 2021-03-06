import React from 'react'
import { FormattedMessage } from 'react-intl'
import { NavigationStyle } from './style.js'
import Button from '../Button'

const Navigation = () => (
  <NavigationStyle>
    <div>
      <img src={process.env.PUBLIC_URL + '/logo-blue.svg'} alt="Pleak logo" />
      <div className="Navigation__left">
        <a
          className="Link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/pleak/pleak-react-perf-monitor/blob/master/README.md"
        >
          <FormattedMessage id="ui.documentation" />
        </a>
        <a
          className="Link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://medium.com/pleak"
        >
          <FormattedMessage id="ui.blog" />
        </a>
      </div>
      <div className="Navigation__right">
        <Button labelId="ui.request_demo" demo />
        <a href="http://pleak-dashboard.herokuapp.com/" className="Link">
          <FormattedMessage id="ui.sign_in" />
        </a>
      </div>
    </div>
  </NavigationStyle>
)

export default Navigation
