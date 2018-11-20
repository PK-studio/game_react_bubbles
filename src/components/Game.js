import React, { Component } from 'react'
import { connect } from 'react-redux'

import Panel from './Game.ControlPanel'
import Board from './Game.Board'

export class Game extends Component {
  render() {
    return (
      <div className='game'>
        <Panel />
        <Board />
      </div>
    )
  }
}

export default connect(null, null)(Game)
