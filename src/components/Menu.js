import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeScreen } from '../actions/action.changeScreen'

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <h1>Level: {this.props.level}</h1>
        <button
          name='game'
          onClick={() => this.props.goTo('game')}>
          Go to game
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  level: state.score.level
})

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
