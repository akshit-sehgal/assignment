import * as actionTypes from './actionTypes';
import { fetchProductsAPI, fetchProductsDetailsAPI, fetchHeaderCarouselDataAPI } from '../helpers/APIs';

// Actions for Homepage Components
const updateIsFetchingProducts = (payload) => {
    return {
        type: actionTypes.UPDATE_IS_FETCHING_PRODUCTS,
        payload
    }
}

const updateProductsList = (payload) => {
    return {
        type: actionTypes.UPDATE_PRODUCTS_LIST,
        payload
    }
}

export const fetchProducts = () => {
    return (dispatch, getState) => {
        const state = getState();
        const { nextPage, isFetchingProducts } = state.homePageReducer;
        if (isFetchingProducts || !nextPage) return;
        dispatch(updateIsFetchingProducts(true));
        return fetchProductsAPI(nextPage).then((response) => {
            dispatch(updateProductsList(response));
            return response;
        }).catch((error) => {
            dispatch(updateIsFetchingProducts(false));
            console.log(error);
            return error;
        })

    }
}

//Actions for Product Details Page
const updateIsFetchingDetails = (payload) => {
    return {
        type: actionTypes.UPDATE_IS_FETCHING_DETAILS,
        payload
    }
}

const updateProductDetails = (payload) => {
    return {
        type: actionTypes.UPDATE_PRODUCT_DETAILS,
        payload
    }
}

export const fetchProductDetails = (id) => {
    return (dispatch, getState) => {
        const state = getState();
        const { isFetchingDetails } = state.homePageReducer;
        if (isFetchingDetails) return;
        dispatch(updateIsFetchingDetails(true));
        return fetchProductsDetailsAPI(id).then((response) => {
            dispatch(updateProductDetails(response));
            return response;
        }).catch((error) => {            
            dispatch(updateIsFetchingDetails(false));
            console.log(error);
            return error;
        })
    }
}

//Actions for Header & Carousel Data
const updateHeaderCarouselData = (payload) => {
    return {
        type: actionTypes.UPDATE_HEADER_CAROUSEL_DATA,
        payload
    }
}
export const fetchHeaderCarouselData = () => {
    return (dispatch, getState) => {
        return fetchHeaderCarouselDataAPI().then((response) => {
            dispatch(updateHeaderCarouselData(response));
            return response
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }
}