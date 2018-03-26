import React from 'react'
import { BlockStyle } from './style.js'

const Block = props => (
  <BlockStyle>
   <span>{props.icon}</span>
   <h3>{props.title}</h3>
   <p>{props.content}</p>
  </BlockStyle>
)

export default Block
