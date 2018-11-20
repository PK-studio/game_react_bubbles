import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from '../settings'
import { Controls } from './Game.ControlPanel.Controls'

export class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: settings.colors,
      time: settings.shuffleColorsEvery,
      clock: null
    }
    this.timer = this.timer.bind(this)
  }

  shuffleColors() {
    let array = this.state.colors
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

  timer(currentTime = this.state.time) {
    if (currentTime === 0) {
      this.setState({
        colors: this.shuffleColors(),
        time: settings.shuffleColorsEvery
      })
    } else {
      this.setState({ time: currentTime - 1 })
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
      <div className='controPanel'>
        <p>change in {this.state.time}</p>
        <Controls colors={this.state.colors} />
      </div>
    )
  }
}

export default connect(null, null)(ControlPanel)
