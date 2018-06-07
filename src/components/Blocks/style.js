import styled from 'styled-components'
import { media } from '../../styles/responsive'
import { fiord, blue, mercury } from '../../styles/colors'

export const BlocksStyle = styled.div`
  .Block {
    display: block;
    margin: 0 auto;
    max-width: 1170px;
    height: 470px;
    border-bottom: 1px solid ${mercury};
    &:last-child {
      border-bottom: 0;
    }
    &--right {
      .Block {
        &__img div {
          right: 130px;
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
        }
      }
    }
    &__img {
      position: relative;
      display: inline-flex;
      width: 50%;
      height: 100%;
      & > div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 270px;
        height: 270px;
        background: ${blue};
      }
    }
    &__content {
      position: relative;
      display: inline-flex;
      width: 50%;
      height: 100%;
      vertical-align: top;
      & > div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        max-width: 470px;
        color: ${fiord};
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