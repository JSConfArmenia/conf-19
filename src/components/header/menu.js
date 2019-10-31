import React from 'react';
import {bool} from 'prop-types';
import {scroller} from 'react-scroll';
import {Link} from "react-router-dom";
import styled from '@emotion/styled'

const StyledMenu = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  width: 750px;
  z-index: 99;

  @media (max-width: 768px) {
    background-color: black;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 2rem;
    position: absolute;
    right: 0;
    text-align: left;
    top: 0;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    width: 320px;
  }

  a {
    align-items: center;
    color: white;
    display: flex;
    font-family: manrope;
    font-size: 14px;
    font-weight: normal;
    justify-content: center;
    margin: 5px;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
      width: fit-content;
    }

    &:hover {
      color: red;
    }
  }

  .header_button {
    @media (max-width: 768px) {
      height: 64px;
      width: 280px;
    }
  }
`;

const Menu = ({open, setOpen, ...props}) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 1500,
        delay: 100,
        smooth: true
    })
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to={'#'} tabIndex={tabIndex} onClick={()=>{
          setOpen(false);
          scrollToElement('rotateted_text')
      }}>About</Link>
      {/* <Link to={'#'}>Schedule</Link> */}

      <Link to={'#'} tabIndex={tabIndex} onClick={()=>{
          setOpen(false);
          scrollToElement('speakers')
      }}>Speakers</Link>

      <Link to={'#'} tabIndex={tabIndex} onClick={()=>{
          setOpen(false);
          scrollToElement('sponsors')
      }}>Sponsors</Link>

      <Link to={'#'} tabIndex={tabIndex} onClick={()=>{
          setOpen(false);
          scrollToElement('team')
      }}>
          Team
      </Link>
      <Link to={'#'} tabIndex={tabIndex} onClick={()=>{
          setOpen(false);
          scrollToElement('map')
      }}>Location</Link>

      <Link to={'#'} tabIndex={tabIndex} onClick={()=>{
          setOpen(false);
          scrollToElement('faq')
      }}>FAQ</Link>

      <a target='_blank' rel='noopener noreferrer' href={'https://github.com/JSConfArmenia/conf-19/blob/master/CODE_OF_CONDUCT.md'} tabIndex={tabIndex}>
        Code of Conduct
      </a>

      <a target='_blank' rel='noopener noreferrer' href={'https://docs.google.com/forms/d/e/1FAIpQLScfpcg2SvaEuoqcZEPzAmuwG8-bI1SxRbcoCytxzeOruCOZlA/closedform'} className={'header_button'}  tabIndex={tabIndex}>
        Apply to Speak
      </a>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;