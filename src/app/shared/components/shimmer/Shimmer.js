import React from 'react';
import PropTypes from 'prop-types';
import './shimmer.scss';
const Shimmer = (props) => {
    const { count, showImageHolder, showLabelsHolder } = props;
    const shimmers = [];
    for (let i = 0; i < count; i++) {
        shimmers.push(
            <div key={i} className="shimmer__loading">
                <div className="sl__wrapper">
                    {showImageHolder && <div className="sl__pic sl__item--animate"></div>}
                    {
                        showLabelsHolder &&
                        <React.Fragment>
                            <div className="sl__labels sl__item--animate"></div>
                            <div className="sl__labels sl__item--animate"></div>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
    return <div className="shimmers-holder">{shimmers}</div>;
}
Shimmer.defaultProps = {
    count: 1,
    showImageHolder: true,
    showLabelsHolder: true
}
Shimmer.propTypes = {
    count: PropTypes.number,
    showImageHolder: PropTypes.bool,
    showLabelsHolder: PropTypes.bool
}
export default Shimmer;