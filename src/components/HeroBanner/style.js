import styled from 'styled-components'
import { fiord, zircon } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const HeroBannerStyle = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background: ${zircon};
  ${ media.large`
    padding: 0 24px;
  ` }
  ${ media.mobile`
    padding: 0 24px;
    height: 700px;
  ` }
  .HeroBanner {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 1170px;
    height: 100%;
    &__container {
      position: absolute;
      top: calc(50% + 20px);
      transform: translateY(calc(-50% + 20px));
    }
    &__top {
      width: 100%;
    }
    &__bottom {
      height: 65px;
    }
    &__img {
      position: absolute;
      right: 0;
      top: calc(50% + 20px);
      transform: translateY(calc(-50% + 20px));
      ${ media.tablet`
        display: none;
      ` }
      svg {
        width: 470px;
      }
    }
    div {
      h1 {
        font-family: 'inter-bold';
        color: ${fiord};
        font-size: 45px;
        line-height: 55px;
        max-width: 570px;
        ${ media.mobile`
          font-size: 32px;
          line-height: 40px;
          br { display: none; }
        ` }
      }
      p {
        margin-top: 18px;
        max-width: 470px;
        font-family: 'inter-regular';
        color: ${fiord};
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 25px;
      }
      a {
        &:last-child {
          margin-top: 25px;
        }
      }
    }
  }
`