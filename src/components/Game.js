import React, { Component } from 'react'
import { connect } from 'react-redux'

import { settings } from '../settings';
import ControlPanel from './Game.ControlPanel'
import Board from './Game.Board'
import { spamBubbles } from '../actions/action.spam'

export class Game extends Component {

  constructor(props) {
    super(props)
    this.state = {
      spamInterval: null,
    }
  }

  componentDidMount() {
    let frequancy = settings.spamFrequency * 1000
    const spamInterval = setInterval(this.props.updateSpamStatus, frequancy)
    this.setState({ spamInterval })
  }

  componentWillUnmount() {
    clearInterval(this.state.spamInterval)
  }

  render() {
    return (
      <div className='game'>
        <ControlPanel />
        <Board />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spamStatus: state.spam.spamStatus,
  bubbleKey: state.bubbleKey.key,
  map: state.bubbles.map
})

const mapDispatchToProps = dispatch => ({
  updateSpamStatus: () => {
    dispatch(spamBubbles())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
