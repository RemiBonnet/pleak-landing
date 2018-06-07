import React from 'react'
import { layoutGenerator } from 'react-break'
import { sizes } from '../../styles/responsive.js'
import Navigation from '../../components/Navigation'
import HeroBanner from '../../components/HeroBanner'
import Slider from '../../components/Slider'
import FeaturesMobile from '../../components/FeaturesMobile'
import Blocks from '../../components/Blocks'

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

const blocksContent = [
  {
    title: 'Understand how your application perform in complex real‑world environments',
    paragraph: 'Get new KPI’s from your apps in production and improve your customers user experience by measuring segmented performance.',
    img: ''
  },
  {
    title: 'Measure the link between performance slowdown and your business',
    paragraph: 'Confront apps metrics with data from your marketing and business analytics platforms. Get a precise estimation of performance impact overtime.',
    img: ''
  },
  {
    title: 'Ensure your product sustainability by following the technical quality over time',
    paragraph: 'Each release is an opportunity for new features update and performances check up. Be proactive and keep your product quality level at every key steps of its evolution.',
    img: ''
  }
]

const Home = () => (
  <div>
    <Navigation />
    <HeroBanner />
    <Blocks 
      content={blocksContent}
    />
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

