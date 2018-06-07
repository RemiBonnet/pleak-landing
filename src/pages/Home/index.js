import React from 'react'
import { layoutGenerator } from 'react-break'
import { sizes } from '../../styles/responsive.js'
import HeroBanner from '../../components/HeroBanner'
import Slider from '../../components/Slider'
import FeaturesMobile from '../../components/FeaturesMobile'

const layout = layoutGenerator({
  mobile: 0,
  desktop: sizes.tablet
})

const OnDesktop = layout.isAtLeast('desktop')
const OnMobile = layout.is('mobile')

const sliderContent = [
  {
    title: 'Easy to use dashboard',
    paragraph: 'Consistently track progress all your key metrics in one place with efficiency and visibility.',
    img: ''
  },
  {
    title: 'Real time segmentation',
    paragraph: 'Use Pleak to capture every interaction users have with your app and collect essential.',
    img: ''
  },
  {
    title: 'Get alerted on your custom flows',
    paragraph: 'Get alerted about what happened, where and when and take appropriate actions.',
    img: ''
  },
]

const Home = () => (
  <div>
    <HeroBanner />
    <OnDesktop>
      <Slider
        content={sliderContent}
      />
    </OnDesktop>
    <OnMobile>
      <FeaturesMobile 
        content={sliderContent}
      />
    </OnMobile>
    {/* <Content /> */}
    {/* <CatchLine 
      content='😱OMG, this tool sounds amazing!' />
    <Footer /> */}
  </div>
)

export default Home

