export const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';

export const setProductData = productData => dispatch => {
    dispatch({
        type: SET_PRODUCT_DATA,
        payload: {productData},
    })
}