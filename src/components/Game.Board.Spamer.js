import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from '../settings'
import Bubble from './Game.Board.Spamer.Bubble'
import { bubbleSpammed } from '../actions/action.spam'
import { updateKey } from '../actions/action.key'
import { updateArray } from '../actions/action.bubbles'

export class Spamer extends Component {

  spam() {
    let newKey = this.props.bubbleKey
    let newArray = [...this.props.array]
    for (let b = 1; b <= settings.amountOfBubbles; b++) {
      newKey = newKey + 1
      newArray.push(<Bubble key={newKey} />)
    }
    this.props.updateStore(newKey, newArray)
  }

  componentDidMount() {
    if (this.props.spamStatus) this.spam()
  }

  componentDidUpdate() {
    if (this.props.spamStatus) this.spam()
  }

  render() {
    return (null)
  }
}

const mapStateToProps = state => ({
  spamStatus: state.spam.spamStatus,
  bubbleKey: state.bubbleKey.key,
  array: state.bubbles.array
})

const mapDispatchToProps = dispatch => ({
  updateStore: (newKey, newArray) => {
    dispatch(bubbleSpammed());
    dispatch(updateKey(newKey));
    dispatch(updateArray(newArray));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Spamer)
