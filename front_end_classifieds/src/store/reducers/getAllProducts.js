import fetchAllProducts from '../../axios_routes/products_axios';
import * as actionTypes from '../actions/allProductAction';

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  return state;
}

export default reducer;