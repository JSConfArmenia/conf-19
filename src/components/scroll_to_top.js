import React from 'react';
import styled from '@emotion/styled'
import {animateScroll as scroll} from 'react-scroll';

const StyledScrollButton = styled.button`
  border: 1px solid red;
  border-radius: 50%;
  background: black;
  color: white;
  font-size: 24px;
  font-weight: 800;
  height: 44px;
  width: 44px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

const ScrollButton = () => {
  return (
    <StyledScrollButton onClick={() => scroll.scrollToTop()}>
      <span role='img' aria-label='Scroll to Top'>
        ⬆︎
      </span>
    </StyledScrollButton>
  );
};

export default ScrollButton;