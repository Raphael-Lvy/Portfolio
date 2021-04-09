import React from "react"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"
import Header from "./header"
import Footer from './footer'


const Layout = ({ children }) => {
  
    return (
     <>
        <GlobalStyle />
          <MainWrapper>
            <Header  />
            <main>{children}</main>
            <Footer/>
          </MainWrapper>
    </>
    )}
   



export default Layout
