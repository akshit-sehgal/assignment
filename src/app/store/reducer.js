import { combineReducers } from "redux";
import * as actionTypes from './actionTypes';

export const apprInitialState = {
    headerImg: '',
    carouselData: [{},{},{}]
};
export const hprInitialState = {
    productsList: [],
    nextPage: 1,
    isFetchingProducts: false
};
export const pdprInitialState = {
    productDetails: null,
    isFetchingDetails: false
};

export const appReducer = (state = apprInitialState, { type, payload }) => {
    switch (type) {
        case actionTypes.UPDATE_HEADER_CAROUSEL_DATA:
            return {
                ...state,
                headerImg: payload.logo,
                carouselData: payload.carousel,
            }
        default:
            return state;
    }
};
export const homePageReducer = (state = hprInitialState, { type, payload }) => {
    switch (type) {
        case actionTypes.UPDATE_IS_FETCHING_PRODUCTS:
            return {
                ...state,
                isFetchingProducts: payload
            }
        case actionTypes.UPDATE_PRODUCTS_LIST:
            return {
                ...state,
                productsList: [
                    ...state.productsList,
                    ...payload.data
                ],
                nextPage: payload.data.length === 10 ? payload.nextPage : 0,
                isFetchingProducts: false
            }
        default:
            return state;
    }
};
export const productDetailsPageReducer = (state = pdprInitialState, { type, payload }) => {
    switch (type) {
        case actionTypes.UPDATE_IS_FETCHING_DETAILS:
            return {
                ...state,
                isFetchingDetails: payload,
                productDetails:null
            }
        case actionTypes.UPDATE_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: payload,
                isFetchingDetails: false
            }
        default:
            return state;
    }
};
export default combineReducers({
    appReducer,
    homePageReducer,
    productDetailsPageReducer
});