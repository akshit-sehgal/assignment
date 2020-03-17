import { connect } from 'react-redux';
import Header from './Header';
import { fetchHeaderCarouselData } from '../../../store/actions'

const mapStateToProps = (state) => {
    const { headerImg } = state.appReducer;
    return {
        headerImg
    }
}

const mapDispatchToProps = { fetchHeaderCarouselData };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);