import React from 'react';
import './companies.css';
import logo from '../../../images/logo2.png';

const Companies = () => (
    <div className="companies-wrapper">
        <h1 className="companies-heading">
            Galactic Sponsors
        </h1>
        <div className="companies-blocks">
            <div className="general-company company-block">
                <div className="company-title">
                    General Sponsor
                </div>
                <div className="company-logos">
                    <img className='general-logo' src={logo} alt="general company"/>
                </div>
            </div>
            <div className="gold-companies company-block">
                <div className="company-title">
                    Gold Sponsors
                </div>
                <div className="company-logos">
                    <img className='gold-logo' src={logo} alt="gold company"/>
                    <img className='gold-logo' src={logo} alt="gold company"/>
                    <img className='gold-logo' src={logo} alt="gold company"/>
                    <img className='gold-logo' src={logo} alt="gold company"/>
                </div>
            </div>
            <div className="silver-companies company-block">
                <div className="company-title">
                    Silver Sponsors
                </div>
                <div className="company-logos">
                    <img className='silver-logo' src={logo} alt="silver company"/>
                    <img className='silver-logo' src={logo} alt="silver company"/>
                    <img className='silver-logo' src={logo} alt="silver company"/>
                    <img className='silver-logo' src={logo} alt="silver company"/>
                    <img className='silver-logo' src={logo} alt="silver company"/>
                    <img className='silver-logo' src={logo} alt="silver company"/>
                </div>
            </div>
            <div className="starter-company company-block">
                <div className="company-title">
                    Starter Sponsor
                </div>
                <div className="company-logos">
                    <img className='starter-logo' src={logo} alt="starter company"/>
                </div>
            </div>
            <div className="partners company-block">
                <div className="company-title">
                    Partners
                </div>
                <div className="company-logos">
                    <img className='partner-logo' src={logo} alt="partner"/>
                    <img className='partner-logo' src={logo} alt="partner"/>
                </div>
            </div>
        </div>
    </div>
);

export default Companies;
