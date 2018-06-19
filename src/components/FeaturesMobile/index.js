import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FeaturesMobileStyle } from './style'

const FeaturesMobile = props => (
  <FeaturesMobileStyle>
    <h2>Main features.</h2>
    {props.content.map(content => {
      return (
        <div key={content.title}>
          <FormattedMessage id={content.title} tagName="h3" />
          <FormattedMessage id={content.paragraph} tagName="p" />
        </div>
      )
    })}
  </FeaturesMobileStyle>
)

export default FeaturesMobile
