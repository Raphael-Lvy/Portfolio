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
text-decoration:none;
padding : ${({ small }) => small ? '0.5rem 1.25rem' : '0.75rem 1.5rem'};
font-size : ${({ small }) => small ? '1.1rem' : '1.5rem'};
font-weight:600;
font-family:'Roboto';
border-radius:10px;
box-shadow: ${({ primary }) => primary ? '0px 0px 8px rgba(255,255,255,1)' :'0px 0px 5px rgba(0,0,0,1)' };
border: ${({ primary }) => primary ? '1px transparent solid' :'1px transparent solid' };
color: ${({ primary }) => primary ? 'var(--primary-color)' : 'black'};
outline: 0;
  overflow:hidden;
  background: none;
  z-index: 1;
  cursor: pointer;
  transition: 0.08s ease-in;

  &:hover {
    color: ${({ primary }) => primary ? 'white' : 'black'};
    transform: scale(1.05);
   
  }

  &:before {
    content: "";
  position: absolute;
  background: ${({primary}) => primary? 'var(--secondary-bg-button)' : 'white'} ;
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
    font-size:1rem;
  }
`

export default Button;