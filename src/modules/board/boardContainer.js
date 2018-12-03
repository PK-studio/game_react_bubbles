import { connect } from 'react-redux'
import { changeScreen } from '../screen/screenActions'
import { BoardComponent } from './BoardComponent'
import { spamBubbles, restartBubbles } from './boardActions'

const mapStateToProps = state => ({
  bubblesList: state.bubblesList
})

const mapDispatchToProps = dispatch => ({
  changeScreen: place => {
    dispatch(changeScreen(place))
    dispatch(restartBubbles())
  },
  spamBubbles: bubbles => {
    dispatch(spamBubbles(bubbles))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent)