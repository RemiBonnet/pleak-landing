import React, { Component } from 'react'
import TweenLite from 'gsap'
import { SliderStyle } from './style'

class Slider extends Component {

  componentDidMount() {
    // first init slider
    this.changeSlide(0)
  }

  changeSlide = nbSlide => {
    let contents = document.querySelectorAll('.Slide__content')
    let slides = document.querySelectorAll('.Slide')
    let timers = document.querySelectorAll('.Slide__content span')

    Array.from(slides).forEach(slide => {
      slide.style.opacity = '0'
    })

    contents.forEach(content => {
      content.classList.add('Slide__content--opacity')
    })

    timers.forEach(timer => {
      TweenLite.set(timer, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: 'left'
      })
    })

    contents[nbSlide].classList.remove('Slide__content--opacity')
    slides[nbSlide].style.opacity = '1'

    TweenLite.fromTo(timers[nbSlide], 10, {
      opacity: '1'
    }, {
      scaleX: 1,
      onComplete: () => {
        if (nbSlide === (slides.length - 1))
          nbSlide = -1

        this.changeSlide(nbSlide + 1)
      }
    })
  }

  render() {

    let { content } = this.props

    return (
      <SliderStyle>
        <div>
          <div className="Slider__left">
            <div className="Slide Slide--1"></div>
            <div className="Slide Slide--2"></div>
            <div className="Slide Slide--3"></div>
          </div>
          <div className="Slider__right">
            <div className="Slider__right__container">
              <div onClick={this.changeSlide.bind(this, 0)}>
                <div className="Slide__content">
                  <div className="Timer">
                    <span></span>
                  </div>
                  <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='1.5' y='1.5' width='25' height='25' stroke='#fff' strokeWidth='3' />
                  </svg>
                  <h3>{content[0].title}</h3>
                  <p>{content[0].paragraph}</p>
                </div>
              </div>
              <div onClick={this.changeSlide.bind(this, 1)}>
                <div className="Slide__content Slide__content--opacity">
                  <div className="Timer">
                    <span></span>
                  </div>
                  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='15' cy='15' r='13.5' stroke='#fff' strokeWidth='3' />
                  </svg>
                  <h3>{content[1].title}</h3>
                  <p>{content[1].paragraph}</p>
                </div>
              </div>
              <div onClick={this.changeSlide.bind(this, 2)}>
                <div className="Slide__content Slide__content--opacity">
                  <div className="Timer">
                    <span></span>
                  </div>
                  <svg width='37' height='31' viewBox='0 0 37 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M17.5 0L32.6554 26.25L2.34456 26.25L17.5 0Z' transform='translate(1 3)' stroke='#fff' strokeWidth='3' />
                  </svg>
                  <h3>{content[2].title}</h3>
                  <p>{content[2].paragraph}</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </SliderStyle>
    )
  }

}

export default Slider