import React from 'react';
import PropTypes from 'prop-types';
import { HEADER_LABELS } from './constants';
import './style.scss';
class Header extends React.PureComponent {
    componentDidMount() {
        const { headerImg, fetchHeaderCarouselData } = this.props;
        if (!headerImg) {
            fetchHeaderCarouselData();
        }
    }

    render() {
        const { headerImg, navigate } = this.props;
        return (
            <div className="header-container">
                <div className="header__back-holder">
                    {navigate &&
                        <button className="header__back" onClick={navigate}>
                            <i className="material-icons">
                                keyboard_backspace
                        </i>
                            <span>{HEADER_LABELS.BACK_BTN}</span>
                        </button>
                    }
                </div>
                <img className="header__branding" src={headerImg} alt='Logo' />
                <div className="header__name">{HEADER_LABELS.DESCRIPTION}</div>
            </div>
        )
    }
}
Header.propTypes = {
    headerImg: PropTypes.string.isRequired,
    navigate: PropTypes.func,
    fetchHeaderCarouselData: PropTypes.func.isRequired
}
export default Header;