import styled from 'styled-components'
import { media } from '../../styles/responsive'
import { blue, white, dodgerBlue } from '../../styles/colors'

export const BlocksColorStyle = styled.div`
  .Block {
    position: relative;
    display: inline-block;
    width: 50%;
    height: 500px;
    color: ${white};
    ${ media.tablet`
      width: 100%;
      padding: 50px 0;
    ` }
    & > div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      max-width: 400px;
      h2 {
        font-family: 'inter-bold';
        font-size: 28px;
        line-height: 36px;
      }
      p {
        margin-top: 16px;
        margin-bottom: 34px;
        font-family: 'inter-regular';
        font-size: 16px;
        line-height: 25px;
      }
      a {
        margin-left: 0;
      }
    }
    &__left {
      background: ${blue};
      div {
        right: 130px;
        margin-left: 24px;
        ${ media.tablet`
          margin-left: 0;
          right: inherit;
          left: 24px;
        ` }
        svg {
          margin-bottom: 34px;
        }
      }
    }
    &__right {
      background: ${dodgerBlue};
      padding-left: 130px;
      ${ media.tablet`
        position: relative;
        top: -3px;
        padding-left: 24px;
      ` }
      div {
        margin-right: 24px;
        iframe {
          margin-bottom: 34px;
        }
      }
    }
  }
`