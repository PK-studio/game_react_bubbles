import { connect } from 'react-redux'
import { BubbleComponent } from './BubbleComponent'
import { changeScreenTo } from '../screen/screenActions'
import { collectBubble, restartBubbles } from '../board/boardActions'

const mapStateToProps = state => ({
  screenWidth: state.selectedScreen.screenWidth,
  screenHeight: state.selectedScreen.screenHeight,
  activeColor: state.activeColor.color
})

const mapDispatchToProps = dispatch => ({
  gameOver: screen => {
    dispatch(changeScreenTo('menu'))
    dispatch(restartBubbles())
  },
  collectBubble: bubble => {
    dispatch(collectBubble(bubble))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BubbleComponent)