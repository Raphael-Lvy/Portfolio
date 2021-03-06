import { createGlobalStyle } from "styled-components"
import BG from '../components/Assets/bg2.png';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  

  :root {
    --primary-color: rgb(255, 255, 255);
    --secondary-color: rgb(5,217,254);
    --secondary-color: rgb(5,217,254);
    --primary-bg : rgba(5,217,254,0.95);
    --primary-bg-button : rgba(5,217,254,0.5);
    --secondary-bg-button : rgba(5,217,254,0.5);
    --secondary-bg:rgb(5,217,254);
    --white: #FFFAFF;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     
  }
  html {
    font-family: 'Roboto', cursive;
    touch-action: manipulation;
    position: absolute;
    overflow-x: hidden;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  ${'' /* background: url(${BG}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */}
  }
  

  body:after{
      content:"";
      position:fixed; // stretch a fixed position to the whole screen
      top:0;
      height:100vh; // fix for mobile browser address bar appearing disappearing
      left:0;
      right:0;
      z-index:-1; // needed to keep in the background
      background: url(${BG}) no-repeat center center ; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
}

  `
  
  

