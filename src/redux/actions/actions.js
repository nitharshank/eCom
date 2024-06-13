export const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';

export const setName = product => dispatch => {
    dispatch({
        type: SET_PRODUCT_DATA,
        payload: product,
    })
}