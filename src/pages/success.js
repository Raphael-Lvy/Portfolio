import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import SEO from "../components/seo"

import { GlobalStyle } from "../components/globalStyle"
import Footer from '../components/footer';
import Lines from '../components/Lines/Lines'

const SuccessPage = () => (
  <>
    <GlobalStyle />
    <Success>
      <SEO title="Message envoyé" />
        
          <h1>Votre message a été envoyé avec succès !</h1>
          <h3>Je vous recontacterai au plus vite </h3>
          <Link to="/">Retour au site</Link>
          <div className='lines'>
            <Lines deg={2} position = {4} delay={0.5} bg={true}/>
            <Lines deg={102} position = {4} delay={0.9} bg={true}/>
            <Lines deg={52} position = {30} delay={1.9} bg={true}/>
            <Lines deg={-2} position = {40} delay={1.5} bg={true}/>
            <Lines deg={-10} position = {60} delay={2.2} bg={true}/>
            <Lines deg={-20} position = {50} delay={1.5} bg={true}/>
            <Lines deg={-250} position = {40} delay={1.1} bg={true}/>
            <Lines deg={-120} position = {90} delay={1.9} bg={true}/>
            <Lines deg={-1} position = {80} delay={2.9} bg={true}/>
            <Lines deg={-30} position = {80} delay={0.9} bg={true}/>
            <Lines deg={10} position = {70} delay={2.5} bg={true}/>
          </div>
      </Success>
      <Footer/>
  </>
)

export default SuccessPage

const Success = styled.div`
height:90vh;
box-sizing:border-box;
margin:0;
padding:0;
color:white;
display:flex;
flex-direction:column;
align-items:center;
padding: 0 5vh;
text-align: center;

h1{
  margin-top:10vh;
  font-size:1.5rem;
  
}

h3 {
  margin: 2vh 0 5vh 0;
}

a {
 color: white;
 font-size:1.5rem;
 font-weight:bold;
}

.lines {
  height:100vh;
  width:100vw;
  position: absolute;
  grid-column: 1/4;
  overflow:hidden;
  z-index:-1;
  background: black;
}

`