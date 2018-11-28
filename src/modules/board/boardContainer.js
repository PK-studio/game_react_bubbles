import { connect } from 'react-redux'
import { changeScreen } from '../screen/screenActions'
import { BoardComponent } from './BoardComponent'

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(null, mapDispatchToProps)(BoardComponent)