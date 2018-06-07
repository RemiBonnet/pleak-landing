import React from 'react'
import { BlocksStyle } from './style.js'

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
  </BlocksStyle>
)

export default Blocks
