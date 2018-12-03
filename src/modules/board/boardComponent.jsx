import React, { Component } from 'react'
import { settings } from '../../settings';
import BubbleContainer from '../bubble/BubbleContainer'

export class BoardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spamTimer: null
    }
    this.lastBubbleNumber = this.props.bubblesList.length - 1
    this.spam = this.spam.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  spam() {
    let newBubblesList = [...this.props.bubblesList]
    for (let b = 0; b < settings.amountOfBubbles; b++) {
      this.lastBubbleNumber = this.lastBubbleNumber + 1
      newBubblesList.push(this.lastBubbleNumber)
    }
    this.props.spamBubbles(newBubblesList)
  }

  onClick() {
    this.props.changeScreen('menu')
  }

  componentWillMount() {
    const newSpamTimer = setInterval(this.spam, settings.spamFrequency)
    this.setState({ spamTimer: newSpamTimer })
  }

  componentWillUnmount() {
    clearInterval(this.state.spamTimer)
  }

  render() {
    const bubblesMap = this.props.bubblesList.map(bubbleNum => {
      return <BubbleContainer key={bubbleNum} bubbleNum={bubbleNum} />
    })
    return (
      <div className='board'>
        <h1>Game</h1>
        <button onClick={this.onClick}>
          Go to Menu
        </button>
        {bubblesMap}
      </div>
    )
  }
}
