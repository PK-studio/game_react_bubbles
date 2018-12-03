import { connect } from 'react-redux'
import { BubbleComponent } from './BubbleComponent'
import { changeScreen } from '../screen/screenActions'
import { collectBubble } from '../board/boardActions'

const mapStateToProps = state => ({
  screenWidth: state.selectedScreen.screenWidth,
  screenHeight: state.selectedScreen.screenHeight,
  activeColor: state.activeColor.color
})

const mapDispatchToProps = dispatch => ({
  gameOver: screen => {
    dispatch(changeScreen(screen))
  },
  collectBubble: bubble => {
    dispatch(collectBubble(bubble))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BubbleComponent)