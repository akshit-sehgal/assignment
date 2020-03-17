import React from 'react';
import { shallow } from 'enzyme';
import ProductImage from '../ProductImage';
import { mockProductDetails } from '../__mocks__/productDetails.mock';

describe('Testing <ProductImage />', () => {
    let props;
    beforeEach(() => {
        props = {
            imgSrc: mockProductDetails.img
        }
    })
    it('should render the default view', () => {
        const wrapper = shallow(<ProductImage {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.pd__image').prop('src')).toEqual(props.imgSrc);
    });

});