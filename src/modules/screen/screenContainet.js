import { connect } from 'react-redux'
import { changeScreenTo } from './screenActions'
import { ScreenComponent } from './ScreenComponent'

const mapStateToProps = state => ({
  displayScreen: state.selectedScreen.screenName
})

const mapDispatchToProps = dispatch => ({
  changeScreenTo: place => {
    dispatch(changeScreenTo(place))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenComponent)