import styled from 'styled-components'
import { black, white, red, blue, electricViolet } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const SliderStyle = styled.div`
  width: 100%;
  height: 780px;
  background: ${black};
  color: ${white};
  & > div {
    height: 100%;
    max-width: 965px;
    margin: 0 auto;
  }
  .Slider {
    &__left {
      position: relative;
      display: inline-flex;
      width: 50%;
      height: 100%;
      .Slide {
        position: absolute;
        top: 50%;
        left: calc(50% - 15px);
        transform: translate(-50%, -50%);
        opacity: 0;
        width: 470px;
        height: 470px;
        transition: opacity 200ms ease-in-out;
        &--1 {
          background: ${white};
        }
        &--2 {
          background: ${red};
        }
        &--3 {
          background: ${blue};
        }
      }
    }
    &__right {
      display: inline-flex;
      width: 50%;
      height: 100%;
      vertical-align: top;
      position: relative;
      padding-left: 130px;
      ${ media.tablet`
        padding-left: 100px;
      ` }
      &__container {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        & > div {
          margin-top: 54px;
          cursor: pointer;
          font-family: sans-serif;
          &:first-child {
            margin-top: 0;
          }
          &.opacity {
            opacity: 0.4;
          }
          .Slide {
            &__content {
              font-size: 16px;
              max-width: 370px;
              transition: 200ms opacity ease-in-out;
              .Timer {
                position: relative;
                width: 100%;
                height: 1px;
                background: ${white};
                margin-top: 1px;
                span {
                  position: absolute;
                  opacity: 0;
                  background: ${electricViolet};
                  width: 100%;
                  transform: scaleY(1);
                  height: 1px;
                }
              }
              svg {
                margin-bottom: 12px;
                margin-top: 25px;
              }
              h3 {
                font-family: 'inter-bold';
                line-height: 32px;
              }
              p {
                font-family: 'inter-regular';
                line-height: 25px;
              }
              &--opacity {
                opacity: 0.4;
                span {
                  background: ${white};
                }
              }
            }
          }
        }
      }
    }
  }
`