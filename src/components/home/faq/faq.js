import React from 'react';
import './faq.css';
import faqTitleImage from '../../../images/freaking-faq@2x.png';

const faqs = [
    {
        title: 'What is JS Conf Armenia?',
        text: 'JS Conf Armenia is the biggest JavaScript conference in the region that brings together 1000+ JavaScript developers to discuss JS and have fun.'
    },

    {
        title: 'How to participate?',
        text: 'The entry to JS Conf Armenia 2019 is invitation-only so to\n' +
            '                        request your invite please <a href="https://docs.google.com/forms/d/1QRcGKBumvxd1Pt07GGp39pD9AilxoSGQaAd4535hqME/edit" class="faq-link">click here</a>.'
    },

    {
        title: 'Who are the speakers?',
        text: 'To see the confirmed speakers list, please <a href="#jedies" class="faq-link">click here</a>.'
    },
    {
        title: 'How much is the entry-ticket?',
        text: 'You can request a free invitation until November 23. Later you will need to purchase a ticket to attend the event which will cost $10.'
    },
    {
        title: 'What are the talk topics?',
        text: 'The talk topics will be announced soon.'
    },
    {
        title: 'When is the deadline for registration?',
        text: 'The deadline for the free registration is November 23, 2019.'
    },
    {
        title: 'What is the conference language?',
        text: 'The conference will have talks in Armenian, English and Russian, depending on the speaker.'
    },
    {
        title: 'Who are behind JS Conf Armenia?',
        text: 'To see the JS Conf Armenia team, please, <a href="#team" class="faq-link">click here</a>.'
    },
    {
        title: 'When is it going to take place?',
        text: 'The conference will take place from 10:00 to 18:00 on Nov 30, 2019.'
    },
    {
        title: 'How to join the team?',
        text: 'We appreciate that you want to help us to make big things happen but the application for JSConfAM19 volunteers is already closed'
    },
    {
        title: 'Where is it going to be held?',
        text: 'JS Conf Armenia 2019 will be held at Marriott Armenia, Amiryan 1, Yerevan.'
    },
    {
        title: 'Who supports JS Conf Armenia?',
        text: 'To learn about our Companies and partners, please, <a href="#companies" class="faq-link">click here</a>.'
    },
    {
        title: 'What is the conference code of conduct?',
        text: 'All attendees, speakers, Companies and volunteers at our conference are required to agree with the following <a class="faq-link" href="https://github.com/JSConfArmenia/conf-19/blob/master/CODE_OF_CONDUCT.md" class="faq-link">code of conduct</a>.'
    },
];

const Faq = () => {
    return (
        <div className={'toCenter'}>
            <img src={faqTitleImage} className={'faq_title'} />

            <div className={'faq_info'}>

                {faqs.map((faq,i) => {
                    return (
                        <div className={'single_faq'} key={faq.title+i}>
                            <div className={'single_faq_title'}>{faq.title}</div>
                            <div dangerouslySetInnerHTML={{ __html: faq.text}} className="single_faq_text"></div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Faq;

