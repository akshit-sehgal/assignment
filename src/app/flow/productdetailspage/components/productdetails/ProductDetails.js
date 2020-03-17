import React from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import DetailsShimmer from '../../../../shared/components/shimmer/DetailsShimmer';
import './productdetails.scss';
import { DETAILS_LABEL } from './constants';

class ProductDetails extends React.PureComponent {
    componentDidMount() {
        const { fetchProductDetails, id, productDetails } = this.props;
        if (!productDetails || (productDetails && productDetails.id !== id)) {
            fetchProductDetails(id);
        }
        window.scrollTo(0, 0);
    }
    generateDetailsView = () => {
        const { productDetails } = this.props;
        if (!productDetails) return;
        return (
            <React.Fragment>
                <div className="pd__left-panel">
                    <ProductImage imgSrc={productDetails.img} />
                </div>
                <div className="pd__right-panel">
                    <ProductInfo {...productDetails} />
                </div>
            </React.Fragment>
        )
    }
    render() {
        const { isFetchingDetails } = this.props;
        return (
            <div className="product-details section-container">
                <div className="pd__heading">{DETAILS_LABEL.HEADING}</div>
                {isFetchingDetails && <DetailsShimmer />}
                {this.generateDetailsView()}
            </div>
        );
    }
}
ProductDetails.propTypes = {
    fetchProductDetails: PropTypes.func.isRequired,
    isFetchingDetails: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    productDetails: PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}
export default ProductDetails;

