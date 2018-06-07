import styled from 'styled-components'
import { white } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const HeroBannerStyle = styled.div`
  width: 100%;
  height: 680px;
  background: blue;
  ${ media.large`
    padding: 0 24px;
  ` }
  ${ media.mobile`
    padding: 0 24px;
  ` }
  .HeroBanner {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 1170px;
    height: 100%;
    div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      h1 {
        font-family: 'inter-bold';
        color: ${white};
        font-size: 45px;
        line-height: 55px;
        ${ media.mobile`
          font-size: 32px;
          line-height: 40px;
        ` }
      }
      p {
        margin-top: 18px;
        max-width: 470px;
        font-family: 'inter-regular';
        color: ${white};
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
`