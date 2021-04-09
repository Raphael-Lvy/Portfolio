import React from 'react';
import styled from 'styled-components';

const Footer = () => {
     return (
          <StyledFooter>
          <Author>Raphaël Levy © {new Date().getFullYear()} <span role='img' alt='fusée'>🚀</span></Author>
          <Bottom>
              Fait avec <span role='img' alt='amour'>💕</span>
          </Bottom>
    </StyledFooter>
     );
};

export default Footer;


const Author = styled.div`
font-size:1.25rem;
font-weight: bold;
margin-left:50px;
`



const StyledFooter = styled.footer`
  color: #fffaff;
  height:15vh;
  background: var(--secondary-color);
  padding: 1rem 0;
  display: flex;
  flex-direction:column;
  justify-content:center;
 
  
`

const Bottom = styled.div`
font-size:1rem;
align-self:flex-end;
margin-right:50px;
font-weight:bold;
`
