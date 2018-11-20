
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateColor } from '../actions/action.colors'

export class Controls extends Component {

  createButtons() {
    return this.props.colors.map((color, index) => (
      <div
        key={index}
        className='button'
        style={{ backgroundColor: color }}
        onClick={() => this.props.getColor(color)}
      ></div >
    ))
  }

  render() {
    return (
      <div className='controls'>
        {this.createButtons()}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  getColor: color => {
    dispatch(activateColor(color))
  }
})

export default connect(null, mapDispatchToProps)(Controls)