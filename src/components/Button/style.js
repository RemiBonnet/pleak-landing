import styled from 'styled-components'
import { white, blue, white40 } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const ButtonStyle = styled.a`
  display: inline-block;
  cursor: pointer;
  width: 170px;
  height: 40px;
  line-height: 40px;
  background: ${props => props.github ? 'transparent' : blue};
  border: ${props => props.github ? `1px solid ${white40}` : '0'};
  color: ${white};
  padding: 0 20px;
  font-family: 'inter-medium', sans-serif;
  border-radius: 204px;
  text-align: center;
  transform: translateY(0);
  transition: all 0.15s ease;
  ${ media.mobile`
    display: block;
  ` }
  &:last-child {
    margin-left: 25px;
    ${ media.mobile`
      margin-left: 0;
    ` }
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    border-color: ${white};
  }
  svg {
    vertical-align: -4px;
    margin-right: 5px;
  }
  /* ${ media.mobile`
    margin: 0 24px;
  ` } */
`