import React, { Component } from 'react'
import { connect } from 'react-redux'

import Controls from './Game.Controls'
import Board from './Game.Board'

export class Game extends Component {
  render() {
    return (
      <div className='game'>
        <Controls />
        <Board />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
}

export default connect(null, null)(Game)
