import { connect } from 'react-redux'
import { Bubble } from './bubbleComponent';

const mapStateToProps = state => ({
  screenWidth: state.selectedScreen.screenWidth,
  screenHeight: state.selectedScreen.screenHeight
})

export default connect(mapStateToProps, null)(Bubble)