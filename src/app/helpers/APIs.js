import fetchRequest from "./fetchWrapper";

const BASE_URL = 'https://node-sample-api.herokuapp.com/api';

export const fetchHeaderCarouselDataAPI = ()=>{
    return fetchRequest(`${BASE_URL}/home`);
}

export const fetchProductsAPI = (pageNumber) => {
    return fetchRequest(`${BASE_URL}/products?page=${pageNumber}`);
}

export const fetchProductsDetailsAPI = (productId) => {
    return fetchRequest(`${BASE_URL}/products/${productId}`);
}

