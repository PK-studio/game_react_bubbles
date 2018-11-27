import { connect } from 'react-redux'
import { changeScreen } from './screenActions'
import { Screen } from './screenComponent'

const mapStateToProps = state => ({
  displayScreen: state.selectedScreen.screenName
})

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen)