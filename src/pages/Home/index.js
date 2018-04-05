import React, { Component } from 'react'
import HeroBanner from '../../components/HeroBanner'
import Content from '../../components/Content'
import CatchLine from '../../components/CatchLine'
import Footer from '../../components/Footer'

import { captureComponentPerfs } from '../../pleak-react-perf-monitor/lib'

class Home extends Component {

  constructor(props) {
    super(props)

    captureComponentPerfs(this, {
      debug: true
    })
  }

  render() {
    return(
      <div>
        <HeroBanner />
        <Content />
        <CatchLine 
          content='😱OMG, this tool sounds amazing!' />
        <Footer />
      </div>
    )
  }

}


export default Home

