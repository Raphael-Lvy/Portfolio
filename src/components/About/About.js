import React, {useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';


import Raphael from '../Assets/RaphaelCarré.png';

const Word = () => {
    const [title, setTitle] = useState('');

    const list = ['Web', 'Frontend', 'Freelance'];
    let i =0;
    useEffect(() => {
        const interval = setInterval(() => {
            setTitle(list[i]);
            if( i === list.length - 1) {
                i =0;
            } else {
                i+=1;
            }
           
        }, 4000);
        return () => clearInterval(interval);
    },[])

    return (<SpanWord key={Math.random()}>{title}</SpanWord>)
}


const About = () => {

    

    return (
       <Wrapper>
        <ImageWrapper>
            <ProfilePic src={Raphael}/>
        <StatementWrapper>
           Je suis développeur <Word/>
        </StatementWrapper>
        </ImageWrapper>
        
       </Wrapper>
    );
};



const Wrapper = styled.section`
height:100vh;
width: 100%;
background: linear-gradient( to top ,rgb(20, 20, 20) 0%,rgb(30, 30, 30)  100%) ;
display: flex;
justify-content:center;
color:white;
`

const ImageWrapper = styled.div`
margin: 50px 0;
display:flex;
flex-direction:column;
align-items: center;
position: relative;
border-bottom: 1px solid gray;
height: 35vh;
width: 50vw;

@media screen and (max-width: 740px) {
width:90vw;

}
`

const StatementWrapper = styled.h2`
position: relative;
bottom: -3vh;
font-size: 1.5rem;
width: 100%;
overflow:hidden;

@media screen and (max-width:440px) {
    font-size:1.2rem;
}

`


const ProfilePic = styled.img`
border-radius:50%;
height:25vh;
width:25vh;
filter: grayscale(1);
 `

const fade = keyframes`
from {
    opacity: 0;
    top:40px;
    }
to {
    opacity:1;
    top:0;
}

`


const SpanWord = styled.span`
position: relative;
padding-left:0.35rem;
color:white;
text-shadow: 2px 2px 1px gray;
animation : ${fade} 2s ease-in-out;
font-size: 1.8rem;
letter-spacing:0.15rem;
`


export default About;