import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Controls extends Component {
  onClick(event) {
    console.log(event.target.style.backgroundColor)
  }

  buttons() {
    return this.props.colors.map((color, index) => (
      <div
        key={index}
        className='button'
        style={{ backgroundColor: color }}
        onClick={this.onClick}
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
  colors: state.setting.colors
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
