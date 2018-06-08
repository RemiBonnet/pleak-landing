import React from 'react'
import { HeroBannerStyle } from './style.js'
import Button from '../Button/index.js';

const HeroBanner = () => (
  <HeroBannerStyle>
    <div className="HeroBanner">
      <div className="HeroBanner__container">
        <div className="HeroBanner__top">
          <h1>
            Grow your application’s <br />
            business by monitoring <br /> 
            your performance
          </h1>
          <p>
            Monitor technical performance of your applications to get essential metrics dataset and
            take a customer-centric approach to decision-making.
          </p>
        </div>
        <div className="HeroBanner__bottom">
          <Button
            label="Github"
            url=""
            github
          />
          <Button
            label="Request a demo"
            url=""
          />
        </div>
      </div>
    </div>
  </HeroBannerStyle>
)

export default HeroBanner