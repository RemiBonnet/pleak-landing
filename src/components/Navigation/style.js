import styled from 'styled-components'
import { white } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const NavigationStyle = styled.div`
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 80px;
  z-index: 2;
  ${ media.tablet`
    padding: 0 24px;
  ` }
  & > div {
    position: relative;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 55px;
    img {
      margin-right: 55px;
      ${ media.mobile`
        margin-right: 30px;
      `}
    }
    .Link {
      margin-right: 35px;
      text-decoration: none;
      color: ${white};
      font-family: 'inter-regular';
      transition: opacity 0.2s ease;
      ${ media.mobile`
        margin-right: 15px;
        line-height: 26px;
      `}
      &:hover {
        opacity: 0.4;
      }
      &:last-child {
        margin-right: 15px;
        ${ media.mobile`
          margin-right: 0;
        ` }
      }
    }
    .Navigation__left {
      display: inline-block;
      ${ media.mobile`
        float: right;
        margin-top: 2px;
      ` }
    }
    .Navigation__right {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      a {
        margin-right: 40px;
      }
      ${ media.mobile`
        display: none;
      ` }
    }
  }
`