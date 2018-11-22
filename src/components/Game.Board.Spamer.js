import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from '../settings'
import { Bubble } from './Game.Board.Spamer.Bubble'

export class Spamer extends Component {
  spam() {
    if (!this.props.spamBubbles) return
    for (let i = 0; i < settings.amountOfBubbles; i++) {
      return <Bubble />
    }
  }

  render() {
    return (
      this.spam()
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, null)(Spamer)
