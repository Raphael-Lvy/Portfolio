import React from "react"
import styled from "styled-components"


const Footer = ({ className }) => (
  <footer className={className}>
  
     {/*  © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> */}
   
  </footer>
)

const StyledFooter = styled(Footer)`
  color: #fffaff;
  background: var(--secondary-color);
  padding: 1rem 0;
`

export default StyledFooter
