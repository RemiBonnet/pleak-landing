import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { TweenLite } from 'gsap'

export default function(ComposedComponent) {

  class AnimatedWrapper extends Component {

    componentWillEnter(callback) {
      TweenLite.fromTo(ReactDOM.findDOMNode(this), 0.3,
        {
          y: -10,
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1,
          onComplete: () => callback()
        }
      )
    }

    componentWillLeave(callback) {
      TweenLite.fromTo(ReactDOM.findDOMNode(this), 0.3,
        {
          y: 0,
          opacity: 1
        },
        { 
          y: 10,
          opacity: 0,
          onComplete: () => callback()
        }
      )
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return AnimatedWrapper
}