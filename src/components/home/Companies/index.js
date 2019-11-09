import React from 'react';
import './companies.css';
import GalacticSponsors from '../../../images/galactic-sponsors@2x.png';
import SimplyTechnologies from '../../../images/sponsors/simply.svg';
import Renderforest from '../../../images/sponsors/renderforest.svg';
import SuperAnnotate from '../../../images/sponsors/superannotate.svg';
import Digitain from '../../../images/sponsors/digitain.svg';
import DataArt from '../../../images/sponsors/dataart.png';
import Vineti from '../../../images/sponsors/vineti.svg';
import Teamable from '../../../images/sponsors/teamable.png';
import FluxTechnologies from '../../../images/sponsors/flux.svg';
import Ameriabank from '../../../images/sponsors/ameriabank.svg';
import WebbFontaine from '../../../images/sponsors/webbfontaine.svg';

const Companies = () => {
    const goldSponsors = [
        Digitain,
        WebbFontaine,
        Renderforest,
        SimplyTechnologies,
        DataArt
    ];
    const silverSponsors = [
        FluxTechnologies,
        Vineti,
        SuperAnnotate,
        Ameriabank,
        Teamable,
    ];
    return (
        <div className="companies-wrapper">
            <img className="companies-heading" alt="Galactic Sponsors" src={GalacticSponsors}/>
            <div className="companies-blocks">
                <div className="gold-companies company-block">
                    <div className="company-title">
                        Gold Sponsors
                    </div>
                    <div className="company-logos">
                        {goldSponsors.map(sponsorImg => <img className='gold-logo' src={sponsorImg} alt="gold company"/> )}
                    </div>
                </div>
                <div className="silver-companies company-block">
                    <div className="company-title">
                        Silver Sponsors
                    </div>
                    <div className="company-logos">
                        {silverSponsors.map(sponsorImg => <img className='gold-logo' src={sponsorImg} alt="gold company"/> )}
                    </div>
                </div>
                {/*
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
}

export default Companies;
