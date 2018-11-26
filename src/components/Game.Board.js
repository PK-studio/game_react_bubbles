import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeScreen } from '../actions/action.changeScreen'
import Spamer from './Game.Board.Spamer'
import Bubbles from './Game.Board.Bubbles'

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
        <Bubbles />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
