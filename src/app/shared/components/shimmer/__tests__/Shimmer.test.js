import React from 'react';
import { shallow } from 'enzyme';
import Shimmer from '../Shimmer';

describe('Testing <Shimmer/>', () => {
    let props;
    beforeEach(() => {
        props = {
            count: 2,
            showImageHolder: true,
            showLabelsHolder: true
        }
    })
    it('should render the different views for different props', () => {
        const wrapper = shallow(<Shimmer {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.shimmer__loading').length).toEqual(props.count);
        expect(wrapper.find('.sl__pic').length).toEqual(2);
        expect(wrapper.find('.sl__labels').length).toEqual(4);
        wrapper.setProps({
            count: 1,
            showImageHolder: false,
            showLabelsHolder: false
        });
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.shimmer__loading').length).toEqual(1);
        expect(wrapper.find('.sl__pic').length).toEqual(0);
        expect(wrapper.find('.sl__labels').length).toEqual(0);
    });
});