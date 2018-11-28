import { connect } from 'react-redux'
import { changeScreen } from './screenActions'
import { ScreenComponent } from './ScreenComponent'

const mapStateToProps = state => ({
  displayScreen: state.selectedScreen.screenName
})

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenComponent)