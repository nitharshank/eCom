import axios from 'axios';
import { APIConstants } from './api-constants';

export const authenticateUser = async (inputs, onSuccess, onError) => {
    let data = JSON.stringify({ username: inputs.email.value, password: inputs.password.value, });
    let config = {
        method: APIConstants.POST,
        url: APIConstants.BASE_URL + APIConstants.ACTION_LOGIN,
        headers: { 'Content-Type': APIConstants.CONTENT_TYPE, },
        data: data,
    };

    axios(config)
        .then(function (response) {
            onSuccess(response.data);
        })
        .catch(function (error) {
            onError(error || 'Invalid Credentials or User not exist');
        });
};


export const fetchProductList = async (onSuccess, onError) => {
    let config = {
        method: APIConstants.GET, url: APIConstants.BASE_URL + APIConstants.ACTION_FETCH_PRODUCTS,
        headers: { 'Content-Type': APIConstants.CONTENT_TYPE, },
    };

    axios(config)
        .then(function (response) {
            onSuccess(response?.data?.products);
        })
        .catch(function (error) {
            onError("Error in fetch products!");
        });
};

export const fetchUserDetail = async (id, onSuccess, onError) => {
    let config = {
        method: APIConstants.GET, url: APIConstants.BASE_URL + APIConstants.ACTION_FETCH_USER + id,
        headers: { 'Content-Type': APIConstants.CONTENT_TYPE, },
    };

    axios(config)
        .then(function (response) {
            onSuccess(response?.data);
        })
        .catch(function (error) {
            onError("Error in fetch user detail!");
        });
};



export const fetchProductDetail = async (id, onSuccess, onError) => {
    let config = { method: APIConstants.GET, url: APIConstants.BASE_URL + APIConstants.ACTION_FETCH_PRODUCTS_DETAILS + id,
        headers: {'Content-Type': APIConstants.CONTENT_TYPE, },
    };

    axios(config)
        .then(function (response) {
            onSuccess(response?.data);
        })
        .catch(function (error) {
            onError("Error in fetch user detail!");
        });

};