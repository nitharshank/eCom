import { SET_PRODUCT_DATA } from '../actions/actions'

const initialState = {
    product: {},
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT_DATA:
            return { ...state, name: action.payload };
        default:
            return state;
    }
}
  
  export default productReducer;