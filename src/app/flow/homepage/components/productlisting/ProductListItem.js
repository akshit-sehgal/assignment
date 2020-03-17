import React from 'react';
import PropTypes from 'prop-types';
const ProductListItem = (props) => {
    const { id, img, name, price, navigate } = props;
    return (
        <div data-id={id} className="product-list-item" onClick={navigate}>
            <img className="pli__img" src={img} />
            <div className="pli__description">
                <div className="pli__name">{name}</div>
                <div className="pli__price">{`Rs. ${price} /-`}</div>
            </div>
        </div>
    )
}

ProductListItem.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired
}
export default ProductListItem;