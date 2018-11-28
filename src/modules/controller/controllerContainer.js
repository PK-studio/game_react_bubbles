import { connect } from 'react-redux'
import { activateColor } from './controllerActions'
import { ControllerComponent } from './ControllerComponent'

const mapDispatchToProps = dispatch => ({
  activateColor: color => {
    dispatch(activateColor(color))
  }
})

export default connect(null, mapDispatchToProps)(ControllerComponent)