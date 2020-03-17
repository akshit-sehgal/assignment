import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Testing <Header/>', () => {
    let props;
    beforeEach(() => {
        props = {
            headerImg: 'https://images.google.com/1.png',
            navigate: jest.fn(),
            fetchHeaderCarouselData: jest.fn()
        }
    })
    it('should render the default view', () => {
        const wrapper = shallow(<Header {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.header__back').length).toEqual(1);
        expect(wrapper.find('.header__branding').prop('src')).toEqual(props.headerImg);
    });
    it('should call navigate when back button is clicked', () => {
        const wrapper = shallow(<Header {...props} />);
        wrapper.find('.header__back').simulate('click');
        expect(props.navigate).toHaveBeenCalledTimes(1);
    });
    it('should call fetchHeaderCarouselData tp fetch data', () => {
        props.headerImg = '';
        props.navigate = null;
        const wrapper = shallow(<Header {...props} />);
        expect(props.fetchHeaderCarouselData).toHaveBeenCalledTimes(1);
        expect(wrapper).toMatchSnapshot();
    });

});