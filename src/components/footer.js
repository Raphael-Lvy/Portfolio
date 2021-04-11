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
  height:10vh;
  background: var(--secondary-color);
  padding: 1rem 0;
  display: flex;
  justify-content:space-around;
  align-items:center;
  font-size:1rem;
  font-weight:bold;
  
`
const Author = styled.div`

`

const Bottom = styled.div`



`
