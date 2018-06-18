import React from 'react'
import { HeroBannerStyle } from './style.js'
import { FormattedHTMLMessage } from 'react-intl'
import Button from '../Button/index.js'

const HeroBanner = () => (
  <HeroBannerStyle>
    <div className="HeroBanner">
      <div className="HeroBanner__container">
        <div className="HeroBanner__top">
          <h1>
            <FormattedHTMLMessage id="hero.title" />
          </h1>
          <p>
            Milliseconds are money. Monitor technical performance of your applications to get essential
            metrics datasets and take a customer-centric approach to
            decision-making.
          </p>
        </div>
        <div className="HeroBanner__bottom">
          <Button
            label="Github"
            github
            dark
            noBg
          />
          <Button
            label="Request a demo"
            demo
          />
        </div>
      </div>
    </div>
  </HeroBannerStyle>
)

export default HeroBanner
