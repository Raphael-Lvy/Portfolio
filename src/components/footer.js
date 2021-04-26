import React from 'react';
import styled from 'styled-components';

const Footer = () => {
     return (
          <StyledFooter>
               <Top>
                    <Author>Raphaël Levy © {new Date().getFullYear()} <span role='img' aria-label='fusée'>🚀</span></Author>
                    <div>Fait avec <span role='img' aria-label='amour'>💕</span></div>
               </Top>
               <Bottom>

                    <Email><span role='img' aria-label='email' className='email'>📩</span> : raphael.webdevelopment@gmail.com</Email>
               </Bottom>
          </StyledFooter>
     );
};

export default Footer;


const StyledFooter = styled.footer`
  color: #fffaff;
  height:20vh;
  background: rgb(47,47,47);
  padding: 1rem 0;
  display: flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  font-size:0.9rem;
  font-weight:bold;
  text-shadow:1px 1px 3px black;
letter-spacing:2px;

@media screen and (max-width:400px) {
     font-size:0.85rem;
   
}

@media screen and (max-width:350px) {
     font-size:0.7rem;
   
}



.email {
     font-size: 1.4rem;
     @media screen and (max-width:400px) {
     font-size:1rem;}}

`

const Author = styled.div`

`
const Top = styled.div`
display:flex;
justify-content:space-between;
width:90%;
`

const Bottom = styled.div`
width:90%;

`
const Email = styled.div`

`