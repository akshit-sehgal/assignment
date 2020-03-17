import React from 'react';
import Shimmer from './Shimmer';
import './detailsshimmer.scss';

const DetailsShimmer = () => {
    return (
        <div className="details-shimmer">
            <div className="ds__left">
                <Shimmer showLabelsHolder={false} />
            </div>
            <div className="ds__right">
                <Shimmer showImageHolder={false} count={2} />
            </div>
        </div>
    )
}
export default DetailsShimmer;