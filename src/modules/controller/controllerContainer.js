import { connect } from 'react-redux'
import { activateColor } from './controllerActions'
import { Controller } from './controllerComponent'

const mapDispatchToProps = dispatch => ({
  activateColor: color => {
    dispatch(activateColor(color))
  }
})

export default connect(null, mapDispatchToProps)(Controller)