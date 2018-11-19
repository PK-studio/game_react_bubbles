import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeScreen } from '../actions/action.change.screen'

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <h1>Level: {this.props.level}</h1>
        <button name='game' onClick={this.props.clickButton}>Go to game</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton: event => {
      dispatch(changeScreen(event.target.name))
    }
  }
}

const mapStateToProps = state => ({
  level: state.score.level
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
