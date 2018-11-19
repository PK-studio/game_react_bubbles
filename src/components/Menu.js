import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeScreen } from '../actions/changeScreen.action'

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <h1>Menu Component</h1>
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

export default connect(null, mapDispatchToProps)(Menu)
