import styled from 'styled-components'
import { black, white } from '../../styles/colors'

export const FeaturesMobileStyle = styled.div`
  background: ${black};
  padding: 70px 24px;
  color: ${white};
  h2 {
    font-family: 'inter-bold';
    font-size: 22px;
    margin-bottom: 20px;
  }
  div {
    font-size: 16px;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    h3 {
      font-family: 'inter-bold';
      line-height: 32px;
    }
    p {
      font-family: 'inter-regular';
      line-height: 25px;
    }
  }
`