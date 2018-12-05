import * as actionTypes from '../actions/actionTypes'
const initialState = {
  urlImage: '',
  arrayOfImages: []
}

const loadImage = (state, action) => {
  let arrOfImages = []
  arrOfImages.push(action.payload)
  return {
    ...state,
    urlImage: action.payload,
    arrayOfImages: arrOfImages
  }
}

const addImage = (state, action) => {
  let nextArray = state.arrayOfImages.map(image => image)
  nextArray.push(state.urlImage)
  return {
    ...state,
    arrayOfImages: nextArray
  }
}

const removeImage = (state, action) => {
  let nextArray = state.arrayOfImages.map(images => images)
  nextArray.pop()
  return {
    ...state,
    arrayOfImages: nextArray
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_IMAGE:
      return loadImage(state, action)
    case actionTypes.ADD_IMAGE:
      return addImage(state, action)
    case actionTypes.REMOVE_IMAGE:
      return removeImage(state, action)
    default:
      return state
  }
}

export default rootReducer
