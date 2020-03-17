import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../';

describe('Testing <Footer/>', () => {
    it('should render the default view', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
        const lists = wrapper.find('.footer__list');
        expect(lists.length).toEqual(4);
        expect(lists.at(0).find('.footer__list-item').length).toEqual(3);
        expect(lists.at(1).find('.footer__list-item').length).toEqual(4);
        expect(lists.at(2).find('.footer__list-item').length).toEqual(4);
        expect(lists.at(3).find('.footer__list-item').length).toEqual(3);
    });
});