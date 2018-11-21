import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from '../settings'
import { ShowTime } from './Game.ControlPanel.ShowTime'
import { Controls } from './Game.ControlPanel.Controls'
import { activateColor } from '../actions/action.colors'

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

  createButtons() {
    return this.state.colors.map((color, index) => (
      <div
        key={index}
        className='button'
        style={{ backgroundColor: color }}
        onClick={() => this.props.getColor(color)}
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

  timer(currentTime = this.state.time) {
    switch (currentTime) {
      case 0:
        this.setState({
          colors: this.shuffleColors(),
          time: settings.shuffleColorsEvery
        })
        break;
      default:
        this.setState({ time: currentTime - 1 })
        break;
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
        <ShowTime time={this.state.time} />
        <div className='controls'>
          {this.createButtons()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getColor: color => {
    dispatch(activateColor(color))
  }
})

export default connect(null, mapDispatchToProps)(ControlPanel)
