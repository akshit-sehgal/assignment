import React from 'react';
import PropTypes from 'prop-types';
const ProductImage = (props) => {
    const { imgSrc } = props;
    return (
        <img
            className="pd__image"
            src={imgSrc}
            alt="Product Image"
        />
    );
}
ProductImage.propTypes = {
    imgSrc: PropTypes.string.isRequired
}
export default ProductImage;