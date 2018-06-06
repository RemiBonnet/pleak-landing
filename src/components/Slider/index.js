import React, { Component } from 'react'
import { SliderStyle } from './style'

class Slider extends Component {

  changeSlide = slide => {
    console.log(slide)
  }

  render() {
    return (
      <SliderStyle>
        <div className="Slider__left">
          <div data-slide={1} className="Slide Slide--1"></div>
          <div data-slide={2} className="Slide Slide--2"></div>
          <div data-slide={3} className="Slide Slide--3"></div>
        </div>
        <div className="Slider__right">
          <div onClick={this.changeSlide}>Slide 1</div>
          <div onClick={this.changeSlide}>Slide 2</div>
          <div onClick={this.changeSlide}>Slide 3</div>
        </div>
      </SliderStyle>
    )
  }

}

export default Slider