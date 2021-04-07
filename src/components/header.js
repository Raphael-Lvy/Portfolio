
import React, { useState } from "react"
import styled from "styled-components"
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import {RiComputerFill} from 'react-icons/ri';
import {BsFillLightningFill} from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';
import  programming  from "./Assets/programming.svg"
const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <Head >
      <Nav>
        <Brand >  <img src={programming} alt='logo'/> </Brand>
        <Sections>
          <Section href="/#">
           <White><BsFillLightningFill/> </White>
        About
      </Section>
          <Section href="/#">
         <White>   <RiComputerFill /> </White>
        Projets
        </Section>
          <Section href="/#">
          <White>   <AiFillMessage /> </White>
        Contact
        </Section>
        </Sections>
        
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </Nav>

    </Head>)
}

const Head = styled.header`
z-index:100;
width: 100%;
position:fixed;


`

const Nav = styled.nav`
background-color: transparent;
height: 60px;
display:flex;
justify-content: space-between;
align-items: center;
z-index:100;
position: relative;
color: white;
`



const Brand = styled.div`
padding: 0 10%;

display:flex;
align-items:center;

img {
  height:45px;
}

`


const Sections = styled.div`
padding: 0 5%;
display: flex;
`

const Section = styled.a`
font-size: 1.1rem;
    text-transform: uppercase;
    padding: 2rem 1.5rem;
    font-weight: bold;
    letter-spacing: 0.4rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    display:flex;
    align-items:center;

    svg {
      font-size:1.5rem;
      margin: 0 10px;
    }
    
    @media (max-width: 700px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
         
        transform: translate3d(5px, 0px, 0px);
    }
  

 @media screen and (max-width:1000px) {
   display:none;
 }

`

const White = styled.span`
color: white;

transition:1s;
&:hover {
    color:var(--primary-color);
}
`

export default Header
