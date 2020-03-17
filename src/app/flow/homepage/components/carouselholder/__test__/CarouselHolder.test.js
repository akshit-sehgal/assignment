import React from 'react';
import { shallow } from 'enzyme';
import CarouselHolder from '../CarouselHolder';
import { mockCarouselData } from '../__mocks__/carousel.mock';

describe('Testing <CarouselHolder />', () => {
    let props;
    beforeEach(() => {
        props = {
            carouselData: mockCarouselData
        }
    });
    it('should render the default view', () => {
        const wrapper = shallow(<CarouselHolder {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.carousel__item-wrapper').length).toEqual(props.carouselData.length);
        const customArrowWrapper = shallow(wrapper.find('Carousel').prop('customRightArrow'));
        expect(customArrowWrapper).toMatchSnapshot();
        expect(customArrowWrapper.find('.carousel__btn--right').length).toEqual(1);
        wrapper.setProps({
            carouselData:[{},{},{}]
        });
        expect(wrapper).toMatchSnapshot();
    });

});