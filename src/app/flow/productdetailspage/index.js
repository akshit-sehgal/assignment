import React from 'react';
import ProductDetails from './components/productdetails';
import Header from '../../shared/components/header';
import Footer from '../../shared/components/footer';
import { fetchProductDetails } from '../../store/actions';
import { ROUTE_NAMES } from '../../RouteConstants';

const ProductDetailsPage = (props) => {
    const { history: { push }, match: { params: { id } } } = props;
    return (
        <div className="products-details-container">
            <Header navigate={() => push(ROUTE_NAMES.HOME_PAGE)} />
            <ProductDetails id={id} />
            <Footer />
        </div>
    );
}

export default ProductDetailsPage;

export const fetchProductDetailsSSR = (store, { params: { id } }) => {
    return store.dispatch(fetchProductDetails(id));
}