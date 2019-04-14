import fetchAllProducts from '../../axios_routes/products_axios';
import * as actionTypes from '../actions/allProductAction';

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  let tempState = {...state}
  if(action.type === actionTypes.GETALLRPODUCTS){
    fetchAllProducts.get()
    .then(res => {
      console.log(res);
      tempState.products =  res.data
    })
  }
  return tempState;
}

export default reducer;