import styled from 'styled-components'
import { white, gray2 } from '../../styles/colors'
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
    width: 100%;
    position: absolute;
    text-align: center;
    padding-top: 50px;
    font-size: 20px;
    span {
      opacity: 0;
      display: inline-block;
      margin-right: 20px;
      animation: bounce 0.8s cubic-bezier(0.64, 0.57, 0.67, 1.53) infinite alternate;
      &:last-child {
        animation-delay: 0.15s;
      }
    }
  }
  @keyframes bounce {
    0% {
      opacity: 1;
      transform: translateY(2px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(3px);
      opacity: 0;
    }
  }
`