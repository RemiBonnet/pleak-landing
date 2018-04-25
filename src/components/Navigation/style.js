import styled from 'styled-components'
import { gray, white2, white } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const NavigationStyle = styled.div`
  display: block;
  background: ${white};
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${white2};
  z-index: 2;
  ${ media.tablet`
    padding: 0 24px;
  ` }
  h1 {
    font-family: 'inter-regular', sans-serif;
    display: inline-block;
    font-size: 20px;
    line-height: 80px;
    color: ${gray};
  }
  img {
    position: relative;
    top: 2px;
    width: 20px;
    height: auto;
    margin-right: 10px;
  }
`