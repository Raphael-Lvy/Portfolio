import React from 'react';
import styled from 'styled-components';
import { RiComputerFill } from 'react-icons/ri';
import { BsFillLightningFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <White><BsFillLightningFill /> </White>
        About
      </a>
      <a href="#">
        <White>   <RiComputerFill /> </White>
        Projets
        </a>
      <a href="/design">
        <White>   <AiFillMessage /> </White>
         Contact
        </a>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primary-bg);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right:0;
  
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: 1000px) {
    
  }
  @media (min-width: 1000px) {
    display:none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 4rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.1s linear;
    
    
    @media (max-width: 1000px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
        color: black;
    }
  }
`

const White = styled.span`


transition:0.5s;
&:hover {
    color:black;
}
`

export default Menu;