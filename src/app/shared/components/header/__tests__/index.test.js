import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Container from '../';

describe('Testing <Header /> Container', () => {
    const mockStore = configureStore();
    const appReducer = {
        headerImg: 'https://image.google.com'
    };

    it('should receive the following props', () => {
        let store = mockStore({ appReducer });
        const wrapper = shallow(<Container store={store} />);
        const childWrapper = wrapper.find('Header');
        expect(childWrapper.prop('headerImg')).toEqual(appReducer.headerImg);
        expect(childWrapper.prop('fetchHeaderCarouselData')).toEqual(expect.any(Function));
    });
})
