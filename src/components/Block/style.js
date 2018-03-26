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
  span {
    display: block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid ${white2};
    text-align: center;
    line-height: 45px;
    margin-bottom: 15px;
    padding-left: 3px;
    padding-top: 1px;
    ${ media.mobile`
      padding-left: 0;
      padding-top: 0;
    ` }
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