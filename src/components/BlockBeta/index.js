import React from 'react'
import BetaRegistration from '../BetaRegistration'
import { BlockBetaStyle } from './style.js'

const BlockBeta = () => (
  <BlockBetaStyle>
    <div>
      <h2>Join our Beta version</h2>
      <p>Interested about Pleak? Join our private Beta version by make a request access. With a minimal set up, monitor performance of all your application.</p>
      <BetaRegistration />
    </div>
  </BlockBetaStyle>
)

export default BlockBeta
