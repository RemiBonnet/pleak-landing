import styled from 'styled-components'
import { black, white, red, blue, electricViolet } from '../../styles/colors'

export const SliderStyle = styled.div`
  width: 100%;
  height: 780px;
  /* max-height: 780px; */
  background: ${black};
  color: ${white};
  .Slider {
    &__left {
      position: relative;
      display: inline-block;
      width: 50%;
      height: 100%;
      .Slide {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        width: 470px;
        height: 470px;
        transition: opacity 200ms ease-in-out;
        &--1 {
          background: ${white};
          opacity: 1;
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
      display: inline-block;
      width: 50%;
      height: 100%;
      vertical-align: top;
      position: relative;
      padding-left: 100px;
      &__container {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        & > div {
          margin-top: 55px;
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
              span {
                display: block;
                width: 100%;
                height: 1px;
                background: ${electricViolet};
              }
              svg {
                margin-bottom: 18px;
                margin-top: 25px;
              }
              h3 {
                font-family: 'inter-bold';
                line-height: 30px;
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