import React, { Component } from 'react'
import { settings } from '../../settings';
import Bubble from '../bubble/bubbleContainer'

export class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spamTimer: null,
      lastBubbleNum: 5,
      bubbleList: [1, 2, 3, 4, 5]
    }
    this.spam = this.spam.bind(this)
  }

  spam() {
    let newLastBubbleNum = this.state.lastBubbleNum
    let newBubblesList = [...this.state.bubbleList]
    for (let b = 0; b < settings.amountOfBubbles; b++) {
      newLastBubbleNum = newLastBubbleNum + 1
      newBubblesList.push(newLastBubbleNum)
    }
    this.setState({
      lastBubbleNum: newLastBubbleNum,
      bubbleList: newBubblesList
    })
  }

  componentDidMount() {
    const newSpamTimer = setInterval(this.spam, settings.spamFrequency)
    this.setState({ spamTimer: newSpamTimer })
  }

  componentWillUnmount() {
    clearInterval(this.state.spamTimer)
  }

  render() {
    return (
      <div className='board'>
        <h1>Game</h1>
        <button onClick={() => this.props.goTo('menu')}>
          Go to Menu
        </button>
        {this.state.bubbleList.map(bubbleNum => <Bubble key={bubbleNum} />)}
      </div>
    )
  }
}
