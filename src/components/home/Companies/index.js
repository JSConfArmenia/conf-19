import React from 'react';
import './companies.css';
import GalacticSponsors from '../../../images/galactic-sponsors@2x.png';
import SimplyTechnologies from '../../../images/sponsors/simply.svg';
import Renderforest from '../../../images/sponsors/renderforest.svg';
import SuperAnnotate from '../../../images/sponsors/superannotate.png';
import Digitain from '../../../images/sponsors/digitain.png';
import DataArt from '../../../images/sponsors/dataart.png';
import Vineti from '../../../images/sponsors/vineti.svg';
import Teamable from '../../../images/sponsors/teamable.png';
import FluxTechnologies from '../../../images/sponsors/flux.svg';
import Ameriabank from '../../../images/sponsors/ameriabank.svg';
import WebbFontaine from '../../../images/sponsors/webbfontaine.svg';

const Companies = () => (
    <div className="companies-wrapper">
        <img className="companies-heading" src={GalacticSponsors}></img>
        <div className="companies-blocks">
            {/* <div className="general-company company-block">
                <div className="company-title">
                    General Sponsor
                </div>
                <div className="company-logos">
                    <img className='general-logo' src={logo} alt="general company"/>
                </div>
            </div> */}
            <div className="gold-companies company-block">
                <div className="company-title">
                    Gold Sponsors
                </div>
                <div className="company-logos">
                    <img className='gold-logo' src={Digitain} alt="gold company"/>
                    <img className='gold-logo' src={WebbFontaine} alt="gold company"/>
                    <img className='gold-logo' src={Renderforest} alt="gold company"/>
                    <img className='gold-logo' src={SimplyTechnologies} alt="gold company"/>
                    <img className='gold-logo' src={DataArt} alt="gold company"/>
                </div>
            </div>
            <div className="silver-companies company-block">
                <div className="company-title">
                    Silver Sponsors
                </div>
                <div className="company-logos">
                    <img className='silver-logo' src={Teamable} alt="silver company"/>                    
                    <img className='silver-logo' src={Vineti} alt="silver company"/>
                    <img className='silver-logo' src={Ameriabank} alt="silver company"/>
                    <img className='silver-logo' src={FluxTechnologies} alt="silver company"/>
                    <img className='silver-logo' src={SuperAnnotate} alt="silver sponsor"/>
                </div>
            </div>
            {/* <div className="starter-company company-block">
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
            </div> */}
        </div>
    </div>
);

export default Companies;
