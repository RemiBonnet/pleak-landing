import React from 'react'
import { FormattedMessage } from 'react-intl'
import BetaRegistration from '../BetaRegistration'
import { BlockBetaStyle } from './style.js'

const BlockBeta = () => (
  <BlockBetaStyle>
    <div>
      <FormattedMessage id="beta.title" tagName="h2" />
      <FormattedMessage id="beta.paragraph" tagName="p" />
      <BetaRegistration />
    </div>
  </BlockBetaStyle>
)

export default BlockBeta
