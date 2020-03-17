import React from 'react';
import { shallow } from 'enzyme';
import ProductListingItem from '../ProductListItem';
import { mockProductListingData } from '../__mocks__/productListing.mock';

describe('Testing <ProductListItem />', () => {
    let props;
    beforeEach(() => {
        const { id, name, img, price } = mockProductListingData.productsList[0];
        props = {
            id,
            name,
            img,
            price,
            navigate: jest.fn()
        }
    });
    it('should render the default view', () => {
        const wrapper = shallow(<ProductListingItem {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.pli__img').prop('src')).toEqual(props.img);
        expect(wrapper.find('.pli__name').prop('children')).toEqual(props.name);
        expect(wrapper.find('.pli__price').prop('children')).toEqual(`Rs. ${props.price} /-`);
    });
    it('should call navigate', () => {
        const wrapper = shallow(<ProductListingItem {...props} />);
        wrapper.find('.product-list-item').simulate('click');
        expect(props.navigate).toHaveBeenCalledTimes(1);
    });

});