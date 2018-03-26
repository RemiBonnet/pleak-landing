import styled from 'styled-components'
import { white, black, gray2 } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const FooterStyle = styled.div`
  text-align: center;
  background: ${black};
  padding-top: 105px;
  ${ media.mobile`
    padding-left: 24px;
    padding-right: 24px;
  `}
  h3 {
    font-family: 'inter-medium';
    font-size: 45px;
    line-height: 55px;
    color: ${white};
    ${ media.mobile`
      font-size: 26px;
      line-height: 32px;
    ` }
  }
  p {
    font-family: 'inter-regular';
    font-size: 16px;
    line-height: 25px;
    color: ${gray2};
    margin-top: 20px;
    ${ media.mobile`
      br {
        display: none;
      }
    `}
  }
`