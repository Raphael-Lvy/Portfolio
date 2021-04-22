import React from 'react';
import styled from 'styled-components';
import { RiComputerFill } from 'react-icons/ri';
import { BsFillLightningFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { Link as AnimatedLink } from "react-scroll";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <AnimatedLink activeClass="active"
                            to="Présentation"
                            smooth={true}
                            offset={0}
                            duration={1000}
                            onClick={()=> setOpen(!open)}
                            >
        <White><BsFillLightningFill /> </White>
        Présentation
        </AnimatedLink>
        <AnimatedLink activeClass="active"
                            to="Projets"
                            smooth={true}
                            offset={0}
                            duration={1000}
                            onClick={()=> setOpen(!open)}>
        <White>   <RiComputerFill /> </White>
        Projets
        </AnimatedLink>
        <AnimatedLink activeClass="active"
                            to="Contact"
                            smooth={true}
                            offset={0}
                            duration={1000}
                            onClick={()=> setOpen(!open)}>
        <White>   <AiFillMessage /> </White>
         Contact
        </AnimatedLink>
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
 
  @media (max-width: 550px) {
    padding: 1rem;
  }

  

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 4rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.1s linear;
    cursor:pointer;
    
    @media (max-width: 1000px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media (max-width: 750px) {
      font-size: 1.1rem;
    }

    @media (max-width: 550px) {
      letter-spacing: 0.25rem;
      font-size:1rem;
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