import React, { Component } from 'react'
import { connect } from 'react-redux'

import Game from './Game'
import Menu from './Menu'

export class Screen extends Component {
  displayComponent() {
    switch (this.props.displayScreen) {
      case 'game':
        return <Game />
      case 'menu':
        return <Menu />
      default:
        return <h3>Store hasn't been read</h3>
    }
  }

  render() {
    return (
      <div className='screen'>
        <h1> Bubble chellange </h1>
        {this.displayComponent()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  displayScreen: state.displayScreen.status
})

export default connect(mapStateToProps, {})(Screen)