import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeScreen } from '../actions/changeScreen.action'

export class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game Component</h1>
        <button name='menu' onClick={this.props.clickButton}>Go to Menu</button>
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

export default connect(null, mapDispatchToProps)(Game)
