import React from 'react';
import Header from '../../shared/components/header';
import ProductListing from './components/productlisting';
import Footer from '../../shared/components/footer';
import CarouselHolder from './components/carouselholder';
import { fetchProducts } from '../../store/actions';

const HomePage = (props) => {
    const { history: { push } } = props;
    const navigate = (location) => {
        push(location);
    }
    return (
        <div className="homepage-container">
            <Header />
            <CarouselHolder />
            <ProductListing navigate={navigate} />
            <Footer />
        </div>
    )
}

export default HomePage;

export const fetchProductsSSR = (store, _match) => {
    return store.dispatch(fetchProducts());
}