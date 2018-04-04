import styled from 'styled-components'
import { black, gray, white2 } from '../../styles/colors.js'
import { media } from '../../styles/responsive'

export const BlockStyle = styled.div`
  display: inline-block;
  width: calc(50% - 16px);
  vertical-align: top;
  &:nth-child(2n) {
    margin-left: 32px;
    ${ media.mobile`
      margin-left: 0;
    ` }
  }
  ${ media.mobile`
    width: 100%;
    padding-top: 65px;
    padding-bottom: 55px;
    border-bottom: 1px solid ${white2};
  ` }
  i {
    position: relative;
    display: block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid ${white2};
    line-height: 47px;
    margin-bottom: 15px;
    &::before {
      position: relative;
      left: 1px;
      content: '${props => props.icon}';
      display: block;
      text-align: center;
      font-size: 1.1em;
      /* Fix chrome */
      @media screen and (-webkit-min-device-pixel-ratio:0)
      and (min-resolution:.001dpcm) {
        left: 2px;
      }
      /* Fix firefox */
      @supports (-moz-appearance:none) {
        left: 0;
      }
      ${ media.mobile`
        font-size: 0.9em;
        bottom: 2px;
    ` }
    }
  }
  h3 {
    font-family: 'inter-medium';
    font-size: 35px;
    line-height: 40px;
    color: ${black};
    white-space: pre-wrap;
    ${ media.tablet`
      white-space: inherit;
    `}
    ${ media.mobile`
      font-size: 26px;
      line-height: 32px;
    ` }
  }
  p {
    font-family: 'inter-regular';
    font-size: 16px;
    line-height: 25px;
    margin-top: 29px;
    white-space: pre-wrap;
    color: ${gray};
    ${ media.tablet`
      white-space: inherit;
    ` }
  }
`