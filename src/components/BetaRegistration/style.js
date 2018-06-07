import styled from 'styled-components'
import { grayChateau, red, black } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const BetaRegistrationStyle = styled.div`
  .Input {
    position: relative;
    margin: 0 auto;
    height: 35px;
    border-bottom: ${grayChateau};
    /* max-width: 448px; */
    border-bottom: 1px solid ${grayChateau};
    max-width: 230px;
    width: 230px;
    margin-left: 20px;
    ${ media.tablet`
      width: 100%;
      margin-left: 0;
    ` }
    input {
      width: 230px;
      float: left;
      font-size: 16px;
      line-height: 25px;
      font-family: 'inter-regular';
      border: 0;
      outline: none;
      background: transparent;
      transition: color 0.2s ease-in-out;
      color: ${black};
      ${ media.tablet`
        width: 100%;
      ` }
      &::placeholder {
        transition: color 0.2s ease-in-out;
        color: ${grayChateau};
      }
      &:focus {
        color: ${black};
      }
    }
    a {
      float: right;
      position: absolute;
      margin-left: 30px;
      ${ media.mobile`
        position: inherit;
        float: left;
        margin-left: 0;
        top: 20px;
      ` }
    }
  }
  .Msg {
    position: relative;
    margin-top: 30px;
    font-size: 16px;
    text-align: center;
    ${ media.tablet`
      margin-top: 70px;
      text-align: left;
    ` }
    &__error {
      position: absolute;
      width: 100%;
      font-family: 'inter-medium';
      color: ${red};
      ${ media.mobile`
        width: 100%;
        margin-left: 0;
      ` }
    }
    &__success {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      max-width: 400px;
      margin: 0 auto;
      width: 100%;
      line-height: 25px;
      font-family: 'inter-regular';
      color: ${grayChateau}
      ${ media.tablet`
        left: 0;
        transform: inherit;
      ` }
    }
  }
`