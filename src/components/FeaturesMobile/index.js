import React from 'react'
import { FeaturesMobileStyle } from './style'

const FeaturesMobile = props => (
  <FeaturesMobileStyle>
    <h2>Main features.</h2>
    {props.content.map(content => {
      return (
        <div key={content.title}>
          <h3>{content.title}</h3>
          <p>{content.paragraph}</p>
        </div>
      )
    })}
  </FeaturesMobileStyle>
)

export default FeaturesMobile