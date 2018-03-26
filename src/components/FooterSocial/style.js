import styled from 'styled-components'
import { gray3, white, gray2 } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const FooterSocialStyle = styled.div`
  width: 100%;
  height: 83px;
  position: relative;
  border-top: 1px solid ${gray3};
  ${ media.mobile`
    height: inherit;
  ` }
  .Social {
    line-height: 82px;
    ${ media.mobile`
      display: block;
      line-height: 0;
      padding-top: 30px;
    ` }
    a {
      width: 22px;
      height: 22px;
      margin-right: 30px;
      ${ media.mobile`
        &:last-child {
          margin-right: 0;
        }
      ` }
    }
    svg {
      cursor: pointer;
      path {
        fill: ${gray2};
        transition: fill 0.3s ease-in-out;
      }
      &:hover {
        path {
          fill: ${white}; 
        }
      }
    }
  }
  .Credits {
    position: absolute;
    top: 0;
    right: 0;
    color: ${gray2};
    font-family: 'inter-regular';
    font-size: 16px;
    line-height: 82px;
    ${ media.tablet`
      right: 24px;
    ` }
    ${ media.mobile`
      right: 0;
      position: inherit;
      text-align: center;
    ` }
  }
`