import React from 'react';
import styled, { keyframes } from 'styled-components';
import {FaReact} from 'react-icons/fa';
import Button from './Button/Button';
import {Link} from 'gatsby';
import Lines from './Lines/Lines';

const Hero = () => {

 
    return (
        <HeroContainer>
        <HeroBg>
            
            </HeroBg>
        <HeroContent>
            <HeroOne>Bonjour,</HeroOne>
            <HeroH1> <Petit>Je suis</Petit> <Ombres>R</Ombres>aphaël <Ombres>L</Ombres>evy </HeroH1>
            <ElementReveal>
                 <HeroP>Développeur Fullstack <Blue>React.js <Logo><FaReact/></Logo></Blue> disponible pour vos projets web !</HeroP>
              <Link to="/design" style={{ textDecoration: 'none', display:'inline-block' }}>
              <Button primary={true}>Contact</Button></Link>
            </ElementReveal>
            
        </HeroContent>
        <div className='lines'>
            <Lines deg={2} position = {4} delay={0.5} />
            <Lines deg={102} position = {4} delay={0.9} />
            <Lines deg={52} position = {30} delay={1.9} />
            <Lines deg={-2} position = {40} delay={1.5} />
            <Lines deg={-10} position = {60} delay={2.2} />
            <Lines deg={-20} position = {50} delay={1.5} />
            <Lines deg={-250} position = {40} delay={1.1} />
            <Lines deg={-120} position = {90} delay={1.9} />
            <Lines deg={-1} position = {80} delay={2.9} />
            <Lines deg={-30} position = {80} delay={0.9} />
            <Lines deg={10} position = {70} delay={2.5} />
          </div>
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
background : rgb(21,21,21);
height: 100vh;
width:100vw;
display:grid;
grid-template-columns: 15% 1fr 5%;
position: relative;


.lines {
  height:100vh;
  width:100vw;
  position: absolute;
  grid-column: 1/4;
  overflow:hidden;
}
`

const HeroBg = styled.div`

position: absolute;
top:0;
bottom:0;
right:0;
left:0;
width:100%;
height:100%;
overflow: hidden;

`


const HeroContent =styled.div`
grid-column: 2/3;
align-self: center;
font-size:1.5rem;
margin-bottom:5vh;
color: white;
z-index:3;
letter-spacing:0.15rem;


@media screen and (max-width:740px) {
  font-size:1.25rem;
}
`
const reveal = keyframes`
0% {
  opacity: 0;
  transform: translate3d(-30px, 0px, 0px);
}

100% {
  opacity: 1;
  transform: none;
}`

const HeroOne=styled.p`

margin-bottom:0.5rem;
animation-fill-mode: both;
animation-duration:1000ms;
animation-delay:1s;
animation-iteration-count:1;
animation-name: ${reveal};
`

const HeroH1 = styled.h1`
font-size: 2.25rem;
margin: 0 auto;
animation-fill-mode: both;
animation-duration:1000ms;
animation-delay:2s;
animation-iteration-count:1;
animation-name: ${reveal};

`

const HeroP =styled.p`
margin: 1rem 0;
padding-bottom: 50px;
max-width: 70vw;


`
const ElementReveal=styled.div`
animation-fill-mode: both;
animation-duration:1000ms;
animation-delay:3s;
animation-iteration-count:1;
animation-name: ${reveal};
`

const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `

  const Logo = styled.p`
  animation: ${spin} 1.5s ease-in-out 3s ;
  display:inline-block;
  transition:1s;
  &:hover {
    color:var(--primary-color);
    transform: rotate(360deg);
    
  }
  
  `


const Blue = styled.span`
color: var(--secondary-color);
font-weight: bold;
transition:1s;
&:hover {
    color:var(--primary-color);
}
`
const Petit = styled.span`
font-size: 1.75rem !important;
font-weight:400;
letter-spacing:0.15rem;
`

const Ombres = styled.span `
text-shadow: 3px 3px 1px var(--secondary-color);
font-size: 3rem;
letter-spacing:0.15rem;
transition: 0.5s;

&:hover {
  text-shadow: 3px 3px 1px gray;
}
`


export default Hero;