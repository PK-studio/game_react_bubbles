import { connect } from 'react-redux'
import { BubbleComponent } from './BubbleComponent';

const mapStateToProps = state => ({
  screenWidth: state.selectedScreen.screenWidth,
  screenHeight: state.selectedScreen.screenHeight,
  activeColor: state.activeColor.color
})

export default connect(mapStateToProps, null)(BubbleComponent)