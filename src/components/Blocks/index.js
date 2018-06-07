import React from 'react'
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
        <div></div>
      </div>
      <div className="Block__content">
        <div>
          <h2>{props.content[0].title}</h2>
          <p>{props.content[0].paragraph}</p>
        </div>
      </div>
    </div>

    <OnDesktop>
      <div className="Block  Block--left">
        <div className="Block__content">
          <div>
            <h2>{props.content[1].title}</h2>
            <p>{props.content[1].paragraph}</p>
          </div>
        </div>
        <div className="Block__img">
          <div></div>
        </div>
      </div>
    </OnDesktop>

    <OnMobile>
      <div className="Block  Block--left">
        <div className="Block__img">
          <div></div>
        </div>
        <div className="Block__content">
          <div>
            <h2>{props.content[1].title}</h2>
            <p>{props.content[1].paragraph}</p>
          </div>
        </div>
      </div>
    </OnMobile>

    <div className="Block Block--right">
      <div className="Block__img">
        <div></div>
      </div>
      <div className="Block__content">
        <div>
          <h2>{props.content[2].title}</h2>
          <p>{props.content[2].paragraph}</p>
        </div>
      </div>
    </div>
  </BlocksStyle>
)

export default Blocks
