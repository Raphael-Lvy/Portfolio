import React from 'react';
import styled from 'styled-components';

const Footer = () => {
     return (
          <StyledFooter>
          <Author>Raphaël Levy © {new Date().getFullYear()} <span role='img' aria-label='fusée'>🚀</span></Author>
          <Bottom>
              Fait avec <span role='img' aria-label='amour'>💕</span>
          </Bottom>
    </StyledFooter>
     );
};

export default Footer;






const StyledFooter = styled.footer`
  color: #fffaff;
  height:15vh;
  background: var(--secondary-color);
  padding: 1rem 0;
  display: flex;
  flex-direction:column;
  justify-content:center;
  font-size:1rem;
  
`
const Author = styled.div`

font-weight: bold;
margin-left:10px;
`

const Bottom = styled.div`
align-self:flex-end;
margin-right:20px;
font-weight:bold;
`
