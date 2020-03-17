import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Container from '../';
import { mockCarouselData } from '../__mocks__/carousel.mock';

describe('Testing <CarouselHolder /> Container', () => {
    const mockStore = configureStore();
    const appReducer = {
        carouselData: mockCarouselData
    }

    it('should receive the following props', () => {
        let store = mockStore({ appReducer });
        const wrapper = shallow(<Container store={store} />);
        expect(wrapper.find('CarouselHolder').prop('carouselData')).toEqual(appReducer.carouselData);
    })
})
