import React from 'react';
import { shallow } from 'enzyme';
import DetailsShimmer from '../DetailsShimmer';

describe('Testing <DetailsShimmer/>', () => {
    it('should render the default view', () => {
        const wrapper = shallow(<DetailsShimmer />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.ds__left').length).toEqual(1);
        expect(wrapper.find('.ds__right').length).toEqual(1);
    });
});