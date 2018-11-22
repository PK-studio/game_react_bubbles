import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeScreen } from '../actions/action.changeScreen'
import { Spamer } from './Game.Board.Spamer'

export class Board extends Component {
  render() {
    return (
      <div className='board'>
        <h1>Game Component</h1>
        <button
          onClick={() => this.props.goTo('menu')}>
          Go to Menu
        </button>
        <Spamer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(null, mapDispatchToProps)(Board)
