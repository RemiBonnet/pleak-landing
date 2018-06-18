import React from 'react'
import { HeroBannerStyle } from './style.js'
import { FormattedMessage } from 'react-intl'
import Button from '../Button/index.js'

const HeroBanner = () => (
  <HeroBannerStyle>
    <div className="HeroBanner">
      <div className="HeroBanner__container">
        <div className="HeroBanner__top">
          <h1>
            <FormattedMessage id="hero.title" />
          </h1>
          <p>
            <FormattedMessage id="hero.paragraph" />
          </p>
        </div>
        <div className="HeroBanner__bottom">
          <Button label="Github" url="" github />
          <Button labelId="ui.request_demo" url="" />
        </div>
      </div>
    </div>
  </HeroBannerStyle>
)

export default HeroBanner
