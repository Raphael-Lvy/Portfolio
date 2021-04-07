import React from "react"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"
import Header from "./header"


const Layout = ({ children }) => {
  
    return (
     <>
        <GlobalStyle />
          <MainWrapper>
            <Header  />
            <main>{children}</main>
            
          </MainWrapper>
    </>
    )}
   



export default Layout
