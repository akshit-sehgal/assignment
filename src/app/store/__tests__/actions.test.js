import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import * as fetchWrapper from '../../helpers/fetchWrapper';
import { apprInitialState, hprInitialState, pdprInitialState } from '../reducer';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Testing actions', () => {
    let store;
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('testing fetchProducts()/success-1', () => {
        store = mockStore({
            appReducer: apprInitialState,
            homePageReducer: hprInitialState,
            productDetailsPageReducer: pdprInitialState
        });
        const mockResponse = {
            "nextPage": 2,
            "data": [
                {
                    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/6/12/2570456/2570456_90794ecf-e3f4-4896-b466-efe108372d5a_720_720.jpg.webp"
                }
            ]
        }
        const expectedActions = [
            actionTypes.UPDATE_IS_FETCHING_PRODUCTS,
            actionTypes.UPDATE_PRODUCTS_LIST
        ]
        jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.resolve(mockResponse));
        return store.dispatch(actions.fetchProducts()).then((resp) => {
            expect(resp).toEqual(mockResponse);
            expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
        });
    });
    it('testing fetchProducts()/success-2', () => {
        const newStore = mockStore({
            homePageReducer: {
                ...hprInitialState,
                isFetchingProducts: true
            }
        });
        jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.resolve({}));
        newStore.dispatch(actions.fetchProducts());
        expect(fetchWrapper.default).toHaveBeenCalledTimes(0);
    });
    it('testing fetchProducts()/error', () => {
        store = mockStore({
            appReducer: apprInitialState,
            homePageReducer: hprInitialState,
            productDetailsPageReducer: pdprInitialState
        });
        const mockResponse = {

        }
        const expectedActions = [
            actionTypes.UPDATE_IS_FETCHING_PRODUCTS,
            actionTypes.UPDATE_IS_FETCHING_PRODUCTS
        ]
        jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.reject(mockResponse));
        return store.dispatch(actions.fetchProducts()).catch((resp) => {
            expect(resp).toEqual(mockResponse);
            expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
        });
    });

    it('testing fetchProductDetails()/success-1', () => {
        store = mockStore({
            appReducer: apprInitialState,
            homePageReducer: hprInitialState,
            productDetailsPageReducer: pdprInitialState
        });
        const mockResponse = {
            "id": "3",
            "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/23/290238/290238_7e65adb0-c425-4558-bf2f-ea876cc43c5d_640_640.jpg.webp",
            "name": "Product 3", "rating": 5, "price": "Rs 2125",
            "description": "AI triple rear camera with 15.46 centimeters (6.088-inch)"
        };
        const expectedActions = [
            actionTypes.UPDATE_IS_FETCHING_DETAILS,
            actionTypes.UPDATE_PRODUCT_DETAILS
        ]
        jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.resolve(mockResponse));
        return store.dispatch(actions.fetchProductDetails(1)).then((resp) => {
            expect(resp).toEqual(mockResponse);
            expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
        });
    });
    it('testing fetchProductDetails()/success-2', () => {
        const newStore = mockStore({
            homePageReducer: {
                ...pdprInitialState,
                isFetchingDetails: true
            }
        });
        jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.resolve({}));
        newStore.dispatch(actions.fetchProductDetails(1));
        expect(fetchWrapper.default).toHaveBeenCalledTimes(0);
    });
    it('testing fetchProductDetails()/error', () => {
        store = mockStore({
            appReducer: apprInitialState,
            homePageReducer: hprInitialState,
            productDetailsPageReducer: pdprInitialState
        });
        const mockResponse = {

        }
        const expectedActions = [
            actionTypes.UPDATE_IS_FETCHING_DETAILS,
            actionTypes.UPDATE_IS_FETCHING_DETAILS
        ]
        jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.reject(mockResponse));
        return store.dispatch(actions.fetchProductDetails(1)).catch((resp) => {
            expect(resp).toEqual(mockResponse);
            expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
        });
    });

    it('testing fetchHeaderCarouselData()/success', () => {
        store = mockStore({
            appReducer: apprInitialState,
            homePageReducer: hprInitialState,
            productDetailsPageReducer: pdprInitialState
        });
        const mockResponse = {
            "logo": "https://ecs7.tokopedia.net/assets-seru-frontend/master/img/logo-b0ceebca9543b2da51c42d65485c78f6.png",
            "carousel": [
                {
                    "url": "https://ecs7.tokopedia.net/img/banner/2019/12/18/77927732/77927732_1af4050a-a288-4a9c-8416-b8091be33377.jpg",
                    "title": "Banner 1"
                }
            ]
        };
    const expectedActions = [
        actionTypes.UPDATE_HEADER_CAROUSEL_DATA
    ]
    jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.resolve(mockResponse));
    return store.dispatch(actions.fetchHeaderCarouselData()).then((resp) => {
        expect(resp).toEqual(mockResponse);
        expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    });
});
it('testing fetchHeaderCarouselData()/error', () => {
    store = mockStore({
        appReducer: apprInitialState,
        homePageReducer: hprInitialState,
        productDetailsPageReducer: pdprInitialState
    });
    const mockResponse = {

    }
    const expectedActions = [
    ]
    jest.spyOn(fetchWrapper, 'default').mockReturnValue(Promise.reject(mockResponse));
    return store.dispatch(actions.fetchHeaderCarouselData()).catch((resp) => {
        expect(resp).toEqual(mockResponse);
        expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    });
});

});