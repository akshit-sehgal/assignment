import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';
import './style.scss';
import Shimmer from '../../../../shared/components/shimmer/Shimmer';
import { LISTING_LABELS } from './constants';
import { ROUTE_NAMES } from '../../../../RouteConstants';

class ProductListing extends React.PureComponent {
    navigateToDetailsPage = (e) => {
        const { navigate } = this.props;
        const id = e.currentTarget.getAttribute('data-id');
        navigate(`${ROUTE_NAMES.PRODUCT_DETAILS_PAGE}/${id}`);
    }
    generateProductsList = () => {
        const { productsList } = this.props;
        if (!productsList.length) return;
        return productsList.map((item) => (
            <ProductListItem
                key={item.id}
                navigate={this.navigateToDetailsPage}
                {...item}
            />
        ));
    }
    generateLoadMore = () => {
        const { nextPage, fetchProducts } = this.props;
        return (
            nextPage ?
                <button className="products__more-btn" onClick={fetchProducts}>{LISTING_LABELS.MORE_BTN}</button> :
                <div className="product__no-more">{LISTING_LABELS.NOTHING_MORE}</div>
        );
    }
    componentDidMount() {
        const { productsList, fetchProducts } = this.props;
        if (!productsList.length) {
            fetchProducts();
        }
        window.scrollTo(0, 0);
    }

    render() {
        const { isFetchingProducts } = this.props;
        return (
            <div className="products-container section-container">
                <div className="products__heading">{LISTING_LABELS.HEADING}</div>
                <hr />
                <div className="products__list">
                    {this.generateProductsList()}
                </div>
                {isFetchingProducts && <Shimmer count={10} />}
                {this.generateLoadMore()}
            </div>
        );
    }

}
ProductListing.propTypes = {
    productsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    })).isRequired,
    isFetchingProducts: PropTypes.bool.isRequired,
    nextPage: PropTypes.number.isRequired,
    fetchProducts: PropTypes.func.isRequired
}
export default ProductListing;