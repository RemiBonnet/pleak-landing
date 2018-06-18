import styled from 'styled-components'
import { media } from '../../styles/responsive'
import { fiord, mercury } from '../../styles/colors'

export const BlocksStyle = styled.div`
  .Block {
    display: block;
    margin: 0 auto;
    max-width: 1170px;
    height: 470px;
    border-bottom: 1px solid ${mercury};
    ${ media.tablet`
      margin: 0 24px;
    ` }
    ${ media.mobile`
      height: inherit;
      padding-top: 50px;
      padding-bottom: 50px;
    ` }
    &:last-child {
      border-bottom: 0;
    }
    &--right {
      .Block {
        &__img div {
          right: 130px;
          ${ media.tablet`
            right: 100px;
          ` }
          ${ media.mobile`
            right: inherit;
          `}
        }
      }
    }
    &--left {
      .Block {
        &__content div {
          right: 0;
        }
        &__img div {
          left: 130px;
          ${ media.tablet`
            left: 100px;
          ` }
          ${ media.mobile`
            left: inherit;
          `}
        }
      }
    }
    &__img {
      position: relative;
      display: inline-flex;
      width: 50%;
      height: 100%;
      ${ media.mobile`
        width: 100%;
        height: inherit;
      ` }
      & > div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 500px;
        height: auto;
        svg {
          width: 100%;
        }
        ${ media.mobile`
          position: inherit;
          display: block;
          margin: 0 auto;
          transform: inherit;
          width: 200px;
          height: 200px;
        ` }
      }
    }
    &__content {
      position: relative;
      display: inline-flex;
      width: 50%;
      height: 100%;
      vertical-align: top;
      ${ media.mobile`
        width: 100%;
        height: inherit;
      ` }
      & > div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        max-width: 470px;
        color: ${fiord};
        ${ media.mobile`
          width: 100%;
          position: inherit;
          display: block;
          margin: 0 auto;
          transform: inherit;
          margin-top: 20px;
          max-width: inherit;
        ` }
        h2 {
          font-family: 'inter-bold';
          font-size: 28px;
          line-height: 36px;
        }
        p {
          margin-top: 14px;
          font-family: 'inter-regular';
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }
`