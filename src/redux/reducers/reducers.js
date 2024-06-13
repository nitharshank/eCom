import { SET_PRODUCT_DATA } from '../actions/actions'

const initialState = {
    productData: {},
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT_DATA:
            return { ...state, productData: action.payload };
        default:
            return state;
    }
}
  
  export default productReducer;