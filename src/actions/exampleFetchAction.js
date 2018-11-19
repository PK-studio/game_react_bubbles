import { FETCH_EXAMPLE } from './types';

const api = 'https://jsonplaceholder.typicode.com/posts'

export const fetchDataExample = () => dispatch => {
  fetch(api)
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_EXAMPLE,
      payload: data
    }))
}

// export function fetchDataExample(){
//   return function(dispatch){
//     fetch(api)
//     .then(res => res.json())
//     .then(data => dispatch({
//       type: FETCH_EXAMPLE,
//       payload: data
//     }))
//   }
// }