import React from 'react'
import Block from '../../components/Block'
import { ContentStyle } from './style.js'

const Content = () => (
  <div className="Container">
    <ContentStyle>
      <div className="row">
        <Block
          title={`Get alerted when your app encounters performance\nissues`}
          content={`Each anormaly will be reported, so your team can take\nappropriate actions. Get information about what\nhappened, where and when.`}
          icon={'🔔'}
        />
        <Block
          title={`Compare your app's\nperformance metrics by\nreleases`}
          content={`Analyze, improve, overcome. Each release is an\nopportunity for new features and performances updates.\nIt's also a major milestone of your product life.`}
          icon={'📊'}
        />
      </div>
      <div className="row">
        <Block
          title={`Track performance directly\nfrom your users devices`}
          content={`Obtain informations in real time about your users with\ngeneric or custom performance metrics.`}
          icon={'📱'}
        />
        <Block
          title={`Minimal installation and\nconfiguration`}
          content={`Download our open source packages from npm. Set\ntrackers in your app where you want to know what is up\nwith your performance.`}
          icon={'⚙️'}
        />
      </div>
    </ContentStyle>
  </div>
)

export default Content
