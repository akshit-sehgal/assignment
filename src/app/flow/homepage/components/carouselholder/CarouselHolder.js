import React from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import { responsive } from './config';
import './style.scss';
const CustomArrow = ({ onClick, cssClass, iconClass }) => {
    return (
        <button className={`carousel__btn ${cssClass}`} onClick={onClick}>
            <i className="material-icons">
                {iconClass}
            </i>
        </button>
    );
};
const CarouselHolder = (props) => {
    const { carouselData } = props;
    return (
        <div className="carousel-container">
            <Carousel
                autoPlaySpeed={3000}
                transitionDuration={1000}
                responsive={responsive}
                dotListClass="carousel__dot-list"
                itemClass="carousel__item"
                customRightArrow={<CustomArrow cssClass="carousel__btn--right" iconClass="keyboard_arrow_right" />}
                customLeftArrow={<CustomArrow cssClass="carousel__btn--left" iconClass="keyboard_arrow_left" />}
                renderDotsOutside
                centerMode
                showDots
                autoPlay
                infinite
                ssr
            >
                {
                    carouselData.map(({ title, url }, i) => {
                        return (
                            <div className="carousel__item-wrapper" key={`${title || i}`}>
                                <img className="carousel__item-img" src={url || ''} />
                                <div className="carousel__item-title">{title || ''}</div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
CarouselHolder.propTypes = {
    carouselData: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            title: PropTypes.string
        }).isRequired
    ).isRequired
}
export default CarouselHolder;