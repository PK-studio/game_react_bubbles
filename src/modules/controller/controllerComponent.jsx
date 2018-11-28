import React, { Component } from 'react'
import { settings } from '../../settings'

export class Controller extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: settings.colors,
      time: settings.shuffleColorsInterval,
      clock: null
    }
    this.timer = this.timer.bind(this)
  }

  createButtons() {
    return this.state.colors.map((color, index) => (
      <div
        key={index}
        className='button'
        style={{ backgroundColor: color }}
        onClick={() => this.props.activateColor(color)}
      ></div >
    ))
  }

  shuffleColors() {
    let array = [...this.state.colors]
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array
  }

  timer() {
    switch (this.state.time) {
      case 0:
        this.setState({
          colors: this.shuffleColors(),
          time: settings.shuffleColorsInterval
        })
        break;
      default:
        this.setState(prevState => ({
          time: prevState.time - 1
        }))
    }
  }

  componentDidMount() {
    const clock = setInterval(this.timer, 1000)
    this.setState({ clock: clock })
  }

  componentWillUnmount() {
    clearInterval(this.state.clock)
  }

  render() {
    return (
      <div className='controller'>
        <p className='showtime'>{this.state.time}</p>
        <div className='buttonsContainer'>
          {this.createButtons()}
        </div>
      </div>
    )
  }
}