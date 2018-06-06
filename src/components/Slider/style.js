import styled from 'styled-components'
import { black, white, red, blue } from '../../styles/colors'

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
        display: block;
        width: 470px;
        height: 470px;
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
      display: inline-block;
      width: 50%;
      vertical-align: top;
      & > div {
        margin-top: 20px;
        cursor: pointer;
        font-family: sans-serif;
      }
    }
  }
`