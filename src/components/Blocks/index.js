import React from 'react'
import { FormattedMessage } from 'react-intl'
import { layoutGenerator } from 'react-break'
import { sizes } from '../../styles/responsive.js'
import { BlocksStyle } from './style.js'

const layout = layoutGenerator({
  mobile: 0,
  desktop: sizes.mobile
})

const OnDesktop = layout.isAtLeast('desktop')
const OnMobile = layout.is('mobile')

const Blocks = props => (
  <BlocksStyle>
    <div className="Block Block--right">
      <div className="Block__img">
        <div />
      </div>
      <div className="Block__content">
        <div>
          <FormattedMessage id={props.content[0].title} tagName="h2" />
          <FormattedMessage id={props.content[0].paragraph} tagName="p" />
        </div>
      </div>
    </div>

    <OnDesktop>
      <div className="Block  Block--left">
        <div className="Block__content">
          <div>
            <FormattedMessage id={props.content[1].title} tagName="h2" />
            <FormattedMessage id={props.content[1].paragraph} tagName="p" />
          </div>
        </div>
        <div className="Block__img">
          <div />
        </div>
      </div>
    </OnDesktop>

    <OnMobile>
      <div className="Block  Block--left">
        <div className="Block__img">
          <div />
        </div>
        <div className="Block__content">
          <div>
            <FormattedMessage id={props.content[1].title} tagName="h2" />
            <FormattedMessage id={props.content[1].paragraph} tagName="p" />
          </div>
        </div>
      </div>
    </OnMobile>

    <div className="Block Block--right">
      <div className="Block__img">
        <div />
      </div>
      <div className="Block__content">
        <div>
          <FormattedMessage id={props.content[2].title} tagName="h2" />
          <FormattedMessage id={props.content[2].paragraph} tagName="p" />
        </div>
      </div>
    </div>
  </BlocksStyle>
)

export default Blocks
