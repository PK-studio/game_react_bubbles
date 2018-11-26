import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Bubbles extends Component {

  render() {
    const bubbles = this.props.bubbles.map(bubble => {
      return bubble
    })
    return (bubbles)
  }
}

const mapStateToProps = (state) => ({
  bubbles: state.bubbles.array
})

export default connect(mapStateToProps, null)(Bubbles)
