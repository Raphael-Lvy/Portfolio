
import React, { useState } from "react"
import styled from "styled-components"
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { Link as AnimatedLink } from "react-scroll";

import programming from "./Assets/programming.svg"
const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <Head >
      <Nav>
        <Brand >
          <AnimatedLink activeClass="active"
            to="Hero"
            smooth={true}
            offset={0}
            duration={1000}>   <img src={programming} alt='logo' />
          </AnimatedLink>
        </Brand>
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
height: 70px;
display:flex;
justify-content: space-between;
align-items: center;
z-index:100;
position: relative;
color: white;
`



const Brand = styled.div`
padding: 0 5%;
cursor:pointer;
display:flex;
align-items:center;
transition: 0.2s;
img {
  height:40px;
}

&:hover {
  transform:scale(1.1);
}

`



export default Header
