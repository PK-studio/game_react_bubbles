import { connect } from 'react-redux'
import { changeScreen } from '../screen/screenActions'
import { Board } from './boardComponent'

const mapDispatchToProps = dispatch => ({
  goTo: place => {
    dispatch(changeScreen(place))
  }
})

export default connect(null, mapDispatchToProps)(Board)