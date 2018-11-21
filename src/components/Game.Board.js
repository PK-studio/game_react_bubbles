import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeScreen } from '../actions/action.change.screen'
import { settings } from '../settings'

export class Board extends Component {

  spamBubbles() {
    if (!props.spam) return;
    for (let i = 0; i < settings.amountOfBubbles; i++) {
      console.log('spam')
    }
  }

  render() {
    return (
      <div className='board'>
        <h1>Game Component</h1>
        <p>active color is {this.props.activeColor}</p>
        <button
          onClick={() => this.props.goTo('menu')}>
          Go to Menu
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeColor: state.color.activeColor
})

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
