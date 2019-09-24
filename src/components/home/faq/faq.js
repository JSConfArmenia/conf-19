import React from 'react';
import './faq.css';


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
                'Apply here to become a speaker.'
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
        text: 'To see the JS Conf Armenia team, please, click here.'
    },
    {
        title: 'When is it going to take place?',
        text: 'The conference will take place from 10:00 to 18:00 on Nov 30, 2019.'
    },
    {
        title: 'How to join the team?',
        text: 'To help the team to make JS Conf Armenia 2019 happen please apply here to become a JS Conf droid volunteer!'
    },
    {
        title: 'Where is it going to be held?',
        text: 'JS Conf Armenia 2019 will be held at Marriott Armenia, Amiryan 1, Yerevan.'
    },
    {
        title: 'Who supports JS Conf Armenia?',
        text: 'To learn about our sponsors and partners, please, click here.'
    },
];


const Faq = () => {
    return (
        <div className={'toCenter'}>
            <h1 className={'faq_title'}>
                FREAKING <span style={{color: '#FF4700'}}>FAQ</span>
            </h1>

            <div className={'faq_info'}>

                {faqs.map((faq,i) => {
                    return (
                        <div className={'single_faq'} key={faq.title+i}>
                            <div className={'single_faq_title'}>{faq.title}</div>
                            <div className="single_faq_text">{faq.text}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Faq;

