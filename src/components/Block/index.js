import React from 'react'
import { BlockStyle } from './style.js'

const Block = props => (
  <BlockStyle icon={props.icon}>
   <i></i>
   <h3>{props.title}</h3>
   <p>{props.content}</p>
  </BlockStyle>
)

export default Block
