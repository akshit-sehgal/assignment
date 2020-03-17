import React from 'react';
import PropTypes from 'prop-types';
import './productinfo.scss';
import { DETAILS_LABEL } from './constants';

const StarRating = ({ count }) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(
            <i className="material-icons" key={i}>
                star
            </i>
        )
    }

    return stars;
}
StarRating.defaultProps = {
    count: 0
}
StarRating.propTypes = {
    count: PropTypes.number.isRequired
}


const ProductInfo = (props) => {
    const { name, rating, price, description } = props;
    return (
        <div className="pd__info-container">
            <table className="pf__info-table">
                <tbody>
                    <tr className="pf__table-row">
                        <td>{DETAILS_LABEL.NAME}</td>
                        <td>{name}</td>
                    </tr>
                    <tr className="pf__table-row">
                        <td>{DETAILS_LABEL.RATING}</td>
                        <td className="pd__rating">
                            <StarRating count={rating} />
                        </td>
                    </tr>
                    <tr className="pf__table-row">
                        <td>{DETAILS_LABEL.PRICE}</td>
                        <td>{`${price} /-`}</td>
                    </tr>
                    <tr className="pf__table-row">
                        <td>{DETAILS_LABEL.DESCRIPTION}</td>
                        <td className="pd__desc">{description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
ProductInfo.propTypes = {
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default ProductInfo;