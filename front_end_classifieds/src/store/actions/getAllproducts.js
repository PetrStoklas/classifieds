import * as actionTypes from './allProductAction';

export const getAllProducts = () => {
  return {type: actionTypes.GETALLRPODUCTS}
}

export const getProducts = () => {
  return dispatch => {
    dispatch(getAllProducts())
  }
}