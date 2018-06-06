import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Content from '../../components/Content'
import CatchLine from '../../components/CatchLine'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'

const Home = () => (
  <div>
    <HeroBanner />
    <Slider />
    <Content />
    <CatchLine 
      content='😱OMG, this tool sounds amazing!' />
    <Footer />
  </div>
)

export default Home

