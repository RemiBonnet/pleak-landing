import styled from 'styled-components'
import { gray, white2, white, black } from '../../styles/colors'
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
    &::before {
      display: inline-block;
      content: '';
      background: ${black};
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`