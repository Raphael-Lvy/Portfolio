import React from 'react';
import styled from 'styled-components';

const Lines = ({deg, position, delay}) => {

   

    return (
      <Line deg={deg} position={position} delay={delay}/>

     
    );
};

export default Lines;

const Line =styled.div `

transform : ${({ deg }) => deg ? `rotate(${deg}deg )` : `rotate(${0}deg )`};
background-color: rgba(255,255,255,0.1);
  width:1px;
  height:150vh;
  position:absolute;
  left : ${({ position }) => position ? `${position}%` : 0};
  z-index:1;
  



  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: drop 6s 6s infinite;
    animation-delay : ${({ delay }) => delay ? `${delay}s` : 0};
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    overflow: hidden;
} 

 

  @keyframes drop {
  0% {
    top: -50%}
  100% {
    top: 110%}
  }
`