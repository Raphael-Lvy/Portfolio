import React from 'react';
import styled from 'styled-components';


const Button = ({children, primary, small }) => {
    return (
        <StyledButton primary={primary} small={small} >
          {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`


position:relative;
display:block;
justify-content:center;
align-items:center;
padding : ${({ small }) => small ? '0.5rem 1.25rem' : '0.75rem 1.5rem'};
font-size : ${({ small }) => small ? '1.2rem' : '1.5rem'};
font-weight:bold;
font-family:'Roboto';
border-radius:10px;
border: ${({ primary }) => primary ? '2px var(--primary-color) solid' :'2px var(--secondary-color) solid' };
color: ${({ primary }) => primary ? 'var(--primary-color)' : 'var(--secondary-color)'};
outline: 0;
  overflow:hidden;
  background: none;
  z-index: 1;
  cursor: pointer;
  transition: 0.08s ease-in;

  &:hover {
    color:black;
    transform: scale(1.05);
   
  }

  &:before {
    content: "";
  position: absolute;
  background: ${({primary}) => primary? 'white' : 'var(--secondary-bg-button)'} ;
  bottom: 0;
  left: 0;
  right: 100%;
  top: 0;
  z-index: -1;
  transition: right 0.25s ease-in;
  }

  &:hover:before {
    right: 0;
    
  }

  @media screen and (max-width:740px) {
    padding: 0.5rem 1.5rem;
    font-size:1.25rem;
  }
`

export default Button;