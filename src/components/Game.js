import React, { Component } from 'react'
import { connect } from 'react-redux'

import { settings } from '../settings';
import Panel from './Game.ControlPanel'
import Board from './Game.Board'
import spamBubbles from '../actions/action.spamBubbles'

export class Game extends Component {

  constructor(props) {
    super(props)
    this.state = {
      spamInterval: null,
      time: settings.spamFrequency
    }
  }

  shouldComponentUpdate() {
    return false
  }

  spamTimer() {
    switch (this.state.time) {
      case 0:
        this.spamBubbles(true)
        this.setState({ time: settings.spamFrequency })
        break;
      default:
        this.spamBubbles(false)
        this.setState({ time: this.state.time - 1 })
        break;
    }
  }

  componentDidMount() {
    let frequancy = settings.spamFrequency * 1000
    const spamInterval = setInterval(this.spamTimer, frequancy)
    this.setState({ spamInterval })
  }

  componentWillUnmount() {
    clearInterval(this.state.spamInterval)
  }

  render() {
    return (
      <div className='game'>
        <Panel />
        <Board />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  spamBubbles: value => {
    dispatch(spamBubbles(value))
  }
})

export default connect(null, mapDispatchToProps)(Game)
