import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png'
import burger from '../../images/burger.png'
import {scroller} from 'react-scroll';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
        isMenuVisible: false,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isMenuVisible: false });
    }
  }

  scrollToElement = (element) => {
      scroller.scrollTo(element, {
          duration: 1500,
          delay: 100,
          smooth: true
      });
      this.setState({ isMenuVisible: false });
  };

  onClick = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  render() {
    const items = [
        { title: 'About', element: 'rotated_text' },
        { title: 'Speakers', element: 'jedies' },
        { title: 'Schedule', element: 'schedule'},
        { title: 'Sponsors', element: 'companies' },
        { title: 'Jobs', element: 'jobsTitleImage' },
        { title: 'Team', element: 'team' },
        { title: 'Location', element: 'map' },
        { title: 'FAQ', element: 'faq' },
    ];
    const { isMenuVisible } = this.state;
    const menuStyle = isMenuVisible ? { 'background-color': 'black', display: 'flex' } : { };
    return (
        <div ref={this.setWrapperRef}>
            <div className={'wrapperHeader'}>
                <div className={'header'}>
                    <div className={'header_logo'}>
                        <Link to={'/'}>
                            <img src={logo} alt="img"/>
                        </Link>
                    </div>
                    <img onClick={this.onClick} className="hamburger" src={burger}/>
                    <div className={'header_items'} style={menuStyle} >
                        {items.map((item) =>
                            <Link to={'#'} key={item.title} onClick={()=>{
                                this.scrollToElement(item.element)
                            }}>{item.title}</Link>
                        )}
                        <a
                            target='_blank'
                            href={'https://github.com/JSConfArmenia/conf-19/blob/master/CODE_OF_CONDUCT.md'}
                            className={'header_conduct'}>Code of Conduct
                        </a>
                        <a
                            target='_blank'
                            href={'https://docs.google.com/forms/d/e/1FAIpQLScINFE818lItuC2Bdf0XNIx0TLEwyzyxXE9JxIvatuYcw6_Bg/viewform'} className={'header_button'}>Request an Invite</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};

export default Header;
