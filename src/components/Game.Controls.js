import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateColor } from '../actions/action.colors'
import { settings } from '../settings'

export class Controls extends Component {
  buttons() {
    return settings.colors.map((color, index) => (
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
        {this.buttons()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  getColor: color => {
    dispatch(activateColor(color))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
