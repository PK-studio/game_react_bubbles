
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { activateColor } from '../actions/action.colors'

// export class Controls extends Component {
//   createButtons() {
//     return this.props.colors.map((color, index) => (
//       <div
//         key={index}
//         className='button'
//         style={{ backgroundColor: color }}
//         onClick={() => this.props.getColor(color)}
//       ></div >
//     ))
//   }

//   shouldComponentUpdate(nextProps) {
//     return JSON.stringify(this.props.colors) != JSON.stringify(nextProps.colors)
//   }

//   render() {
//     return (
//       <div className='controls'>
//         {this.createButtons()}
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   getColor: color => {
//     dispatch(activateColor(color))
//   }
// })

// export default connect(null, mapDispatchToProps)(Controls)