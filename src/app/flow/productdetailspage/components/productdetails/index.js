import { connect } from 'react-redux';
import { fetchProductDetails } from '../../../../store/actions';
import ProductDetails from './ProductDetails';

const mapStateToProps = (state) => {
    const { productDetails, isFetchingDetails } = state.productDetailsPageReducer;
    return {
        productDetails,
        isFetchingDetails
    }
}

const mapDispatchToProps = { fetchProductDetails };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails);
