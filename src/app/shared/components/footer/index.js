import React from 'react';
import './style.scss';
import { ALL_FOOTER_ITEMS, FOOTER_LABELS } from './constants';

const Footer = () => {
    const generateSectionListItems = (subheads) => {
        return subheads.map((label) => <button className="footer__list-item" key={label}>{label}</button>)
    }
    const generateAllSections = () => {
        return Object.entries(ALL_FOOTER_ITEMS).map(([head, subheads]) => {
            return (
                <div className="footer__list" key={head}>
                    <div className="footer__list-head">{head}</div>
                    {generateSectionListItems(subheads)}
                </div>
            )
        })
    }
    return (
        <div className="footer-container">
            <div className="footer__list-container section-container">
                {generateAllSections()}
            </div>
            <hr />
            <div className='footer__cr'>{FOOTER_LABELS.COPYRIGHT}</div>
        </div>
    )
}
export default Footer;