import React, {Component} from 'react';
import Section from "./Section/Section";

import jedi from '../../../images/Illustrations1/Jedies.png';
import sponsor from '../../../images/Illustrations1/Council.png';
import droid from '../../../images/Illustrations1/Droids.png';

import {Element} from 'react-scroll';

class Index extends Component {

    state = {
        data: [
            {
                isleft: true,
                name: 'speakers',
                image: jedi,
                title: 'Speakers',
                color: '#FF4700',
                text: 'Share your knowledge and skills in JavaScript with the\n' +
                    'regional JS community.\n' +
                    'Become a JS Conf 2019 speaker-jedi!',
                buttonText: 'Become a Jedi'
            },
            {
                isleft: false,
                name: 'Companies',
                image: sponsor,
                title: 'Sponsors',
                color: '#15C70E',
                text: 'Join the board of JS Conf Armenia 2019 supporting IT\n' +
                    'companies, be at one of the biggest tech events in\n' +
                    'the region and get your company seen.\n' +
                    'Become a JS Conf 2019 sponsor!',
                buttonText: 'Request More Info'
            },
            {
                isleft: true,
                name: '',
                image: droid,
                title: 'Droids',
                color: '#19B1FF',
                text: 'Do you want to be another helpful and\n' +
                    'important Beebee-Ate or Threepio for the\n' +
                    'JSConfAM jedi-team and make unforgettable\n' +
                    'memories? Here you go, apply ahead!',
                buttonText: 'Become a Volunteer'
            }
        ]
    };


    render() {
        return (
            <div>
                {this.state.data.map((d, i) => {
                    return (
                        <Element key={i} name={d.name}>
                            <Section
                                isleft={d.isleft}
                                colorText={d.title}
                                color={d.color}
                                title={"Call For"}
                                imgUrl={d.image}
                                text={d.text}
                                buttonText={d.buttonText}
                            />
                        </Element>

                    )
                })}
            </div>
        );
    }
}

export default Index;
