import React, { Component } from 'react'

export class ShowTime extends Component {
  render() {
    return (
      <p className='showtime'>{this.props.time}</p>
    )
  }
}
