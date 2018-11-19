import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeScreen } from '../actions/action.change.screen'

export class Board extends Component {
  render() {
    return (
      <div className='board'>
        <h1>Game Component</h1>
        <button name='menu' onClick={this.props.clickButton}>Go to Menu</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    clickButton: event => {
      dispatch(changeScreen(event.target.name))
    }
  }
}

export default connect(null, mapDispatchToProps)(Board)
