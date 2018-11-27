import { CHANGE_SCREEN } from './screenActions';

const screenWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const screenHeight = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

const initialState = {
  screenName: 'menu',
  screenWidth: screenWidth,
  screenHeight: screenHeight

}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screenName: action.payload
      }
    default:
      return state;
  }
}