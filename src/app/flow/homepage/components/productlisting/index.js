import { connect } from 'react-redux';
import ProductListing from './ProductListing';
import { fetchProducts } from '../../../../store/actions';

const mapStateToProps = (state) => {
    const { productsList, isFetchingProducts, nextPage } = state.homePageReducer;
    return {
        productsList,
        isFetchingProducts,
        nextPage
    }
}

const mapDispatchToProps = { fetchProducts };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListing);

