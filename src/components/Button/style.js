import styled from 'styled-components'
import { white, black } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const ButtonStyle = styled.div`
  width: 255px;
  cursor: pointer;
  line-height: calc(60px - 1px);
  height: 100%;
  background: ${black};
  color: ${white};
  padding: 0 20px;
  font-family: 'inter-regular', sans-serif;
  &:hover {
    span {
      animation: bounceArrow 0.45s ease-in-out infinite alternate;
      ${ media.tablet`
        animation: inherit;
    ` }
    }
  }
  span {
    position: relative;
    top: -2px;
    display: inline-block;
    background: url('arrow.svg');
    background-size: cover;
    width: 8px;
    height: 5px;
    margin-left: 5px;
  }
  @keyframes bounceArrow {
    0% { transform: translateY(0); }
    50% { transform: translateY(2px); }
    100% { transform: translateY(0); }
  }
`