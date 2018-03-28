import React from 'react'
import Button from '../../components/Button'
import { HeroBannerStyle } from './style.js'

const HeroBanner = () => (
  <HeroBannerStyle>
    <div className="Container">
      <h2>
        Performance monitoring <br />
        for React Native apps <br />
      </h2>
      <p>
        Get meaningful data about your app. We monitor your apps to provide <br />
        you a comprehensive data set, from the app opening to any <br />
        component.
      </p>
      <Button />
    </div>
    <div className="Image">
      <img aria-hidden src="herobanner.svg" alt="Pleak image" />
    </div>
  </HeroBannerStyle>
)

export default HeroBanner