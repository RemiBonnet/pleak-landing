import styled from 'styled-components'
import { white15, black, white20, white } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const FooterStyle = styled.div`
  display: block;
  background: ${black};
  height: 265px;
  ${ media.mobile`
    height: auto;
  ` }
  .Footer {
    max-width: 1170px;
    margin: 0 auto;
    ${ media.tablet`
      margin: 0 24px;
    ` }
    &__top {
      width: 100%;
      display: inline-block;
      padding-top: 55px;
      padding-bottom: 20px;
      border-bottom: 1px solid ${white15};
      p {
        float: right;
        font-family: 'inter-regular';
        font-size: 16px;
        line-height: 25px;
        color: ${white20};
        ${ media.mobile`
          float: inherit;
          padding-top: 20px;
        ` }
      }
    }
    &__bottom {
      padding-top: 20px;
      font-size: 16px;
      line-height: 25px;
      font-family: 'inter-regular';
      ${ media.mobile`
        padding-top: 40px;
      ` }
      a {
        color: ${white};
        text-decoration: none;
        transition: opacity 0.2s ease;
        &:hover {
          opacity: 0.4;
        }
      }
      &__links {
        a {
          margin-right: 60px;
          ${ media.mobile`
            margin-right: 30px;
          ` }
        }
      }
      &__rs {
        float: right;
        margin-top: -22px;
        ${ media.mobile`
          float: inherit;
          margin-top: 30px;
          padding-bottom: 50px;
        ` }
        a {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
        }
        .Languages {
          position: relative;
          top: 2px;
          display: inline-block;
          vertical-align: top;
          color: ${white};
          font-family: 'inter-regular';
          font-size: 16px;
          span {
            opacity: 0.4;
          }
          a {
            margin: 0 5px;
            opacity: 0.4;
            &.active {
              opacity: 1;
            }
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`