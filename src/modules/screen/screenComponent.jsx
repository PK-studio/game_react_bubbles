import React, { Component } from 'react'
import Controller from '../controller/controllerContainer'
import Board from '../board/boardContainer'

export class Screen extends Component {

  game() {
    return (
      <div className='game'>
        <Controller />
        <Board />
      </div>
    )
  }

  menu() {
    return (
      <div className='menu'>
        <button onClick={() => this.props.goTo('game')}>
          Go to game
      </button>
      </div>
    )
  }

  displayScreenType() {
    switch (this.props.displayScreen) {
      case 'game':
        return this.game()
      case 'menu':
        return this.menu()
      default:
        return <h3>Store hasn't been read</h3>
    }
  }

  render() {
    return (
      <div className='screen'>
        {this.displayScreenType()}
      </div>
    )
  }
}
