import { connect } from 'react-redux';
import CarouselHolder from './CarouselHolder';

const mapStateToProps = (state) => {
    const { carouselData } = state.appReducer;
    return {
        carouselData
    }
}


export default connect(
    mapStateToProps
)(CarouselHolder);