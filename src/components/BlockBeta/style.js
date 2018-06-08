import styled from 'styled-components'
import { media } from '../../styles/responsive'
import { white, fiord } from '../../styles/colors'

export const BlockBetaStyle = styled.div`
  position: relative;
  height: 456px;
  background: ${white};
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 570px;
    text-align: center;
    ${ media.tablet`
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      max-width: inherit;
      text-align: left;
      padding: 0 24px;
    ` }
    h2 {
      color: ${fiord};
      font-size: 45px;
      line-height: 55px;
      font-family: 'inter-bold';
      margin-bottom: 13px;
      ${ media.mobile`
        font-size: 32px;
        line-height: 40px;
      ` }
    }
    p {
      margin: 0 auto;
      color: ${fiord};
      max-width: 430px;
      font-size: 16px;
      line-height: 25px;
      font-family: 'inter-regular';
      margin-bottom: 35px;
      ${ media.tablet`
        text-align: left;
        margin-left: 0;
        margin-right: 24px;
      ` }
      ${ media.mobile`
        width: 100%;
      ` }
    }
  }
`