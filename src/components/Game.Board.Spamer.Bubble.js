import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from '../settings';

export class Bubble extends Component {


  bubbleStyle() {
    return {
      left: '200',
      backgroundColor: 'green',
      width: '30' + 'px',
      height: '30' + 'px',
    }
  }

  // speed() {
  //   let speedOffset = Math.round(Math.random() * settings.speedOffset)
  //   return settings.movementSpeed - (settings.movementSpeed * speedOffset)
  // }

  // movement() {
  //   return setInterval(this.moveBubble, speed())
  // }

  render() {
    return (
      <div className='bubble' style={this.bubbleStyle()}></div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Bubble)
