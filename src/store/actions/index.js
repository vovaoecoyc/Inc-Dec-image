import * as actionTypes from './actionTypes'
import { API } from '../../constants'

export const addImage = () => {
  return { type: actionTypes.ADD_IMAGE }
}

export const removeImage = () => {
  return { type: actionTypes.REMOVE_IMAGE }
}

export const loadImage = () => dispatch => {
  fetch(`${API}/photos/1`, {
    method: 'GET'
  })
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch({ type: actionTypes.LOAD_IMAGE, payload: json.thumbnailUrl })
    })
    .catch(error => console.log(error))
}
