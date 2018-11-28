import React, { Component } from 'react'
import { settings } from '../../settings'

export class BubbleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      left: '',
      top: '',
      speed: '',
      movementInterval: ''
    }
    this.moveBubble = this.moveBubble.bind(this)
    this.canRemove = this.canRemove.bind(this)
  }

  makeBubbleStyle() {
    const initColor = () => {
      const randomColorPosition = Math.floor(Math.random() * settings.colors.length)
      return settings.colors[randomColorPosition]
    }

    const initLeftPosition = () => {
      const boardWidth = this.props.screenWidth * 0.9
      const bubbleWidth = 30
      return Math.floor(Math.random() * (boardWidth - bubbleWidth))
    }

    const initSpeed = () => {
      const offset = Math.floor(Math.random() * (settings.speed * settings.speedOffset))
      return settings.speed - offset 
    }

    this.setState({
      color: initColor(),
      left: initLeftPosition(),
      speed: initSpeed(),
      top: this.props.screenHeight,
    })
  }

  removeBubble(){
    console.log('should remove bubble')
  }

  moveBubble() {
    this.setState(prev => ({
      top: prev.top - 2
    }))
  }

  canRemove(){
    if(this.props.activeColor === this.state.color){
      this.removeBubble()
    }
  }

  componentWillMount() {
    this.makeBubbleStyle()
  }

  componentDidMount() {
    const defineMovement = setInterval(this.moveBubble, this.state.speed)
    this.setState({ movementInterval: defineMovement })
  }

  componentWillUnmount() {
    clearInterval(this.state.movementInterval)
  }

  render() {
    const bubbleStyle = {
      backgroundColor: this.state.color,
      left: this.state.left,
      top: this.state.top
    }
    return (
      <div
        className='bubble'
        style={bubbleStyle}
        onClick={this.canRemove}
      ></div>
    )
  }
}
