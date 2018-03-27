import styled from 'styled-components'
import { white, gray2, red } from '../../styles/colors'
import { media } from '../../styles/responsive'

export const NewsletterStyle = styled.div`
  padding-top: 75px;
  padding-bottom: 150px;
  .Input {
    position: relative;
    margin: 0 auto;
    height: 35px;
    border-bottom: ${gray2};
    max-width: 448px;
    border-bottom: 1px solid ${gray2};
    input {
      width: 85%;
      float: left;
      font-size: 16px;
      line-height: 25px;
      font-family: 'inter-regular';
      border: 0;
      outline: none;
      background: transparent;
      transition: color 0.2s ease-in-out;
      color: ${white};
      ${ media.mobile`
        width: inherit;
      ` }
      &::placeholder {
        transition: color 0.2s ease-in-out;
        color: ${gray2};
      }
      &:focus {
        color: ${white};
      }
    }
    button {
      float: right;
      font-size: 16px;
      line-height: 25px;
      font-family: 'inter-regular';
      cursor: pointer;
      border: 0;
      outline: none;
      background: transparent;
      color: ${gray2};
      transition: color 0.2s ease-in-out;
      &:hover {
        color: ${white};
      }
    }
  }
  .Msg {
    position: relative;
    width: 100%;
    font-size: 16px;
    text-align: center;
    &__error {
      position: absolute;
      top: 12px;
      font-family: 'inter-medium';
      color: ${red};
      margin-left: 280px;
      ${ media.mobile`
        width: 100%;
        margin-left: 0;
      ` }
    }
    &__success {
      width: 100%;
      height: 35px;
      line-height: 25px;
      font-family: 'inter-regular';
      color: ${gray2}
    }
  }
`