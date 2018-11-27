import React, { Component } from 'react'
import { settings } from '../../settings'

export class Bubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      left: '',
      top: '',
      speed: '',
      movement: ''
    }
    this.moveElement = this.moveElement.bind(this)
  }

  bubbleStyle() {
    return {
      backgroundColor: this.state.color,
      left: this.state.left,
      top: this.state.top
    }
  }

  color() {
    return settings.colors[Math.floor(Math.random() * settings.colors.length)]
  }

  initialPositionX() {
    const boardWidth = this.props.screenWidth * 0.9
    const bubbleWidth = 30
    return Math.floor(Math.random() * (boardWidth - bubbleWidth))
  }

  initialPositionY() {
    const boardHeight = this.props.screenHeight
    const bubbleHeight = 30
    return boardHeight + bubbleHeight
  }

  bubbleSpeed(speed = settings.speed, offset = settings.speedOffset) {
    return speed - Math.floor(Math.random() * (speed * offset))
  }

  moveElement() {
    this.setState(prev => ({
      top: prev.top - 1
    }))
  }

  componentWillMount() {
    this.setState({
      color: this.color(),
      left: this.initialPositionX(),
      top: this.initialPositionY(),
      speed: this.bubbleSpeed()
    })
  }

  componentDidMount() {
    const defineMovement = setInterval(this.moveElement, this.state.speed)
    this.setState({ movement: defineMovement })
  }

  componentWillUnmount() {
    clearInterval(this.state.movement)
  }

  render() {
    return (
      <div className='bubble' style={this.bubbleStyle()}></div>
    )
  }
}
