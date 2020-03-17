import { appReducer, homePageReducer, productDetailsPageReducer, apprInitialState, hprInitialState, pdprInitialState } from '../reducer';
import * as actionTypes from '../actionTypes';
import { mockCarouselData } from '../../flow/homepage/components/carouselholder/__mocks__/carousel.mock';
import { mockProductListingData } from '../../flow/homepage/components/productlisting/__mocks__/productListing.mock';
import { mockProductDetails } from '../../flow/productdetailspage/components/productdetails/__mocks__/productDetails.mock';

describe('Testing reducers', () => {
    let action;
    describe('Testing appReducer', () => {
        it('testing initialstate', () => {
            action = {
                type: ''
            }
            expect(appReducer(apprInitialState, action)).toEqual(apprInitialState)
        });
        it('testing UPDATE_HEADER_CAROUSEL_DATA', () => {
            action = {
                type: actionTypes.UPDATE_HEADER_CAROUSEL_DATA,
                payload: {
                    logo: 'http://image.google.com',
                    carousel: mockCarouselData
                }
            }
            expect(appReducer(apprInitialState, action)).toEqual({
                ...apprInitialState,
                headerImg: action.payload.logo,
                carouselData: action.payload.carousel
            })
        });
    });
    describe('Testing homePageReducer', () => {
        it('testing initialstate', () => {
            action = {
                type: ''
            }
            expect(homePageReducer(hprInitialState, action)).toEqual(hprInitialState)
        });
        it('testing UPDATE_IS_FETCHING_PRODUCTS', () => {
            action = {
                type: actionTypes.UPDATE_IS_FETCHING_PRODUCTS,
                payload: true
            }
            expect(homePageReducer(hprInitialState, action)).toEqual({
                ...hprInitialState,
                isFetchingProducts: true
            })
        });
        it('testing UPDATE_PRODUCTS_LIST/1', () => {
            action = {
                type: actionTypes.UPDATE_PRODUCTS_LIST,
                payload: {
                    data: mockProductListingData.productsList,
                    nextPage: mockProductListingData.nextPage
                }
            }
            expect(homePageReducer(hprInitialState, action)).toEqual({
                ...hprInitialState,
                isFetchingProducts: false,
                productsList: action.payload.data,
                nextPage: action.payload.nextPage
            })
        });
        it('testing UPDATE_PRODUCTS_LIST/2', () => {
            action = {
                type: actionTypes.UPDATE_PRODUCTS_LIST,
                payload: {
                    data: [],
                    nextPage: mockProductListingData.nextPage
                }
            }
            expect(homePageReducer(hprInitialState, action)).toEqual({
                ...hprInitialState,
                isFetchingProducts: false,
                productsList: action.payload.data,
                nextPage: 0
            })
        });
    });
    describe('Testing productDetailsPageReducer ', () => {
        it('testing initialstate', () => {
            action = {
                type: ''
            }
            expect(productDetailsPageReducer(pdprInitialState, action)).toEqual(pdprInitialState)
        });
        it('testing UPDATE_IS_FETCHING_DETAILS', () => {
            action = {
                type: actionTypes.UPDATE_IS_FETCHING_DETAILS,
                payload: true
            }
            expect(productDetailsPageReducer(pdprInitialState, action)).toEqual({
                ...pdprInitialState,
                isFetchingDetails: action.payload,
                productDetails:null
            })
        });
        it('testing UPDATE_PRODUCT_DETAILS', () => {
            action = {
                type: actionTypes.UPDATE_PRODUCT_DETAILS,
                payload: mockProductDetails
            }
            expect(productDetailsPageReducer(pdprInitialState, action)).toEqual({
                ...pdprInitialState,
                isFetchingDetails: false,
                productDetails: action.payload
            })
        });
    });
});