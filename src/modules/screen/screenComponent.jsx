import React, { Component } from 'react'
import ControllerContainer from '../controller/ControllerContainer'
import BoardContainer from '../board/BoardContainer'

export class ScreenComponent extends Component {

  game() {
    return (
      <div className='game'>
        <ControllerContainer />
        <BoardContainer />
      </div>
    )
  }

  menu() {
    return (
      <div className='menu'>
        <button onClick={() => this.props.changeScreenTo('game')}>
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
