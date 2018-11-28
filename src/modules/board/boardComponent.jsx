import React, { Component } from 'react'
import { settings } from '../../settings';
import BubbleContainer from '../bubble/BubbleContainer'

export class BoardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spamTimer: null,
      lastBubbleNum: 5,
      bubblesList: [1, 2, 3, 4, 5]
    }
    this.spam = this.spam.bind(this)
  }

  spam() {
    let newLastBubbleNum = this.state.lastBubbleNum
    let newBubblesList = [...this.state.bubblesList]
    for (let b = 0; b < settings.amountOfBubbles; b++) {
      newLastBubbleNum = newLastBubbleNum + 1
      newBubblesList.push(newLastBubbleNum)
    }
    this.setState({
      lastBubbleNum: newLastBubbleNum,
      bubblesList: newBubblesList
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
        {this.state.bubblesList.map(bubbleNum => <BubbleContainer key={bubbleNum} />)}
      </div>
    )
  }
}
