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
        text: 'The entry of JS Conf Armenia 2019 is invitation-only so please make sure to\n' +
            '                        request your invite as soon as the registration opens.'
    },

    {
        title: 'Who are the speakers?',
        text: 'The confirmed speakers list is not available yet. Want to be one of them?\n' +
                '<a class="faq-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScfpcg2SvaEuoqcZEPzAmuwG8-bI1SxRbcoCytxzeOruCOZlA/closedform"> Apply here </a> to become a speaker.'
    },
    {
        title: 'How much is the entry-ticket?',
        text: 'The event entry is free of charge.'
    },
    {
        title: 'What are the talk topics?',
        text: 'The talk topics are not available yet.'
    },
    {
        title: 'When is the deadline for registration?',
        text: 'The registration is not open yet. Follow us on social media to stay tuned.'
    },
    {
        title: 'What is the conference language?',
        text: 'The conference will be held both in Armenian and English, depending on the speaker.'
    },
    {
        title: 'Who are behind the JS Conf Armenia?',
        text: 'To see the JS Conf Armenia team, please, <a href="#team" class="faq-link"> click here</a>.'
    },
    {
        title: 'When is it going to take place?',
        text: 'The conference will take place from 10:00 to 18:00 on Nov 30, 2019.'
    },
    {
        title: 'How to join the team?',
        text: 'To help the team to make JS Conf Armenia 2019 happen please ' +
            '<a target="_blank" ' +
            'href="https://docs.google.com/forms/d/e/1FAIpQLSdcp6Yc6fOp4jvK8lMph9YJ_cxKviwRenEWoTTcwjszzzRKgg/viewform" ' +
            'class="faq-link"> apply here </a> to become a JS Conf droid volunteer!'
    },
    {
        title: 'Where is it going to be held?',
        text: 'JS Conf Armenia 2019 will be held at Marriott Armenia, Amiryan 1, Yerevan.'
    },
    {
        title: 'Who supports JS Conf Armenia?',
        text: 'To learn about our sponsors and partners, please, <a href="#sponsors" class="faq-link">click here</a>.'
    },
    {
        title: 'What is the conference code of conduct?',
        text: 'All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following <a class="faq-link" href="https://github.com/JSConfArmenia/conf-19/blob/master/CODE_OF_CONDUCT.md" class="faq-link">code of conduct</a>.'
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

