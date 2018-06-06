import React, { Component } from 'react'
import TweenLite from 'gsap'
import { SliderStyle } from './style'

class Slider extends Component {

  state = {
    currentSlide: 0
  }

  changeSlide = nbSlide => {
    let contents = document.querySelectorAll('.Slide__content')
    let slides = document.querySelectorAll('.Slide')

    this.setState({
      currentSlide: nbSlide
    })

    let array = Array.from(slides)
    array.forEach(slide => {
      slide.style.opacity = '0'
    })

    contents.forEach(content => {
      content.classList.add('Slide__content--opacity')
    })

    contents[nbSlide].classList.remove('Slide__content--opacity')
    slides[nbSlide].style.opacity = '1'
  }

  render() {
    return (
      <SliderStyle>
        <div className="Slider__left">
          <div className="Slide Slide--1"></div>
          <div className="Slide Slide--2"></div>
          <div className="Slide Slide--3"></div>
        </div>
        <div className="Slider__right">
          <div className="Slider__right__container">
            <div onClick={this.changeSlide.bind(this, 0)}>
              <div className="Slide__content">
                <span></span>
                <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <rect x='1.5' y='1.5' width='25' height='25' stroke='#fff' strokeWidth='3' />
                </svg>
                <h3>Easy to use dashboard</h3>
                <p>Consistently track progress all your key metrics in one place with efficiency and visibility</p>
              </div>
            </div>
            <div onClick={this.changeSlide.bind(this, 1)}>
              <div className="Slide__content Slide__content--opacity">
                <span></span>
                <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='15' cy='15' r='13.5' stroke='#fff' strokeWidth='3' />
                </svg>
                <h3>Real time segmentation</h3>
                <p>Use Pleak to capture every interaction users have with your app and collect essential.</p>
              </div>
            </div>
            <div onClick={this.changeSlide.bind(this, 2)}>
              <div className="Slide__content  Slide__content--opacity">
                <span></span>
                <svg width='37' height='31' viewBox='0 0 37 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M17.5 0L32.6554 26.25L2.34456 26.25L17.5 0Z' transform='translate(1 3)' stroke='#fff' strokeWidth='3' />
                </svg>
                <h3>Get alerted on your custom flows</h3>
                <p>Get alerted about what happened, where and when and take appropriate actions.</p>
              </div>
            </div>
          </div>
        </div>
      </SliderStyle>
    )
  }

}

export default Slider