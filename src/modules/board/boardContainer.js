import { connect } from 'react-redux'
import { changeScreenTo } from '../screen/screenActions'
import { BoardComponent } from './BoardComponent'
import { spamBubbles, restartBubbles } from './boardActions'

const mapStateToProps = state => ({
  bubblesList: state.bubblesList
})

const mapDispatchToProps = dispatch => ({
  spamBubbles: bubbles => {
    dispatch(spamBubbles(bubbles))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent)