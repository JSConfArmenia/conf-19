import React from 'react';
import { bool, func } from 'prop-types';
import styled from '@emotion/styled'

const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  margin-top: 7px;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 0;
  width: 2rem;
  z-index: 100;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  span {
    background: #EFFFFA;
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    :first-of-type {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({open, setOpen, ...props}) => {
  const isExpanded = open ? true: false;

  return (
    <StyledBurger aria-label='Toggle menu' aria-expanded={isExpanded}
        open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Burger;