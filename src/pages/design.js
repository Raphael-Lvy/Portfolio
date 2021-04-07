import React, { useState } from 'react';
import { useSpring, animated} from 'react-spring';
import Layout from "../components/layout";
import styled from 'styled-components';
import image1 from "../data/Images/travel1.jpg";
import image2 from "../data/Images/travel2.jpg";
import image3 from "../data/Images/travel3.jpg";
import image4 from "../data/Images/travel4.jpg";
import image5 from "../data/Images/travel5.jpg";
import image6 from "../data/Images/travel6.jpg";



const DesignPage = () => {

    

    const [appear, setAppear] = useState(1);


    const toggle = (nb) => {
        const current = nb;
        setAppear(current);


    }

    const fade1 = useSpring({ config: { duration: 500 }, opacity: appear === 1 ? 1 : 0, pointerEvents: appear === 1 ? 'auto' : 'none' })
    const fade2 = useSpring({ config: { duration: 500 }, opacity: appear === 2 ? 1 : 0, pointerEvents: appear === 2 ? 'auto' : 'none' })
    const fade3 = useSpring({ config: { duration: 500 }, opacity: appear === 3 ? 1 : 0, pointerEvents: appear === 3 ? 'auto' : 'none' })

    const active1 = useSpring({ opacity: appear === 1 ? 1 : 0.5 })
    const active2 = useSpring({ opacity: appear === 2 ? 1 : 0.5 })
    const active3 = useSpring({ opacity: appear === 3 ? 1 : 0.5 })

    const props1 = useSpring({
        transform: appear === 1 ? 'scale(1)' : 'scale(0)',
        opacity: appear === 1 ? 1 : 0,
        config: { duration: 1000 }
    });
    const props2 = useSpring({
        transform: appear === 2 ? 'scale(1)' : 'scale(0)',
        opacity: appear === 2 ? 1 : 0,
        config: { duration: 1000 }
    });
    const props3 = useSpring({
        transform: appear === 3 ? 'scale(1)' : 'scale(0)',
        opacity: appear === 3 ? 1 : 0,
        config: { duration: 1000 }
    });

    const translate1 = useSpring({
        transform: appear === 1 ? 'translate(0%,3%)' : 'translate(0%,80%)',
        config: { duration: 1500 },

    })
    const translate2 = useSpring({
        transform: appear === 1 ? 'translate(0%,-3%)' : 'translate(0%,-80%)',
        config: { duration: 1500 },

    })
    const translate3 = useSpring({
        transform: appear === 2 ? 'translate(0%,3%)' : 'translate(0%,80%)',
        config: { duration: 1500 },

    })
    const translate4 = useSpring({
        transform: appear === 2 ? 'translate(0%,-3%)' : 'translate(0%,-80%)',
        config: { duration: 1500 },

    })
    const translate5 = useSpring({
        transform: appear === 3 ? 'translate(0%,3%)' : 'translate(0%,80%)',
        config: { duration: 1500 },

    })
    const translate6 = useSpring({
        transform: appear === 3 ? 'translate(0%,-3%)' : 'translate(0%,-80%)',
        config: { duration: 1500 },

    })

    return (
        <Layout>
            <Background>
                <PageWrapper className='primaryBg firstPage activePage' style={fade1} >
                    <Description style={props1} >

                        <h1>John Doe</h1>
                        <h3>Traveler @Expedia</h3>
                        <p>Fourth us let fifth air moving place Fruitful land were.</p>
                    </Description>
                    <ImageWrapper style={props1} >
                        <animated.img src={image1} alt="" className='image1' style={translate1} />
                        <animated.img src={image2} alt="" className='image2' style={translate2} />
                    </ImageWrapper>

                    <SlidesWrapper>
                        <Slides onClick={() => { toggle(1) }} style={active1}>
                            <p>&#9830;</p> <h3>1</h3>
                        </Slides>
                        <Slides onClick={() => { toggle(2) }} style={active2}>
                            <p>&#9830;</p> <h3>2</h3>
                        </Slides>
                        <Slides onClick={() => { toggle(3) }} style={active3}>
                            <p>&#9830;</p> <h3>3</h3>
                        </Slides>
                    </SlidesWrapper>
                </PageWrapper>
                <PageWrapper className="secondaryBg secondPage" style={fade2}>
                    <Description style={props2}>
                        <h1>Jane Dicken</h1>
                        <h3>Adventurer @Expedia</h3>
                        <p>Fill darkness image herb made spirit two tree, darkness his.</p>
                    </Description>
                    <ImageWrapper style={props2} >
                        <animated.img src={image3} alt="" className='image1' style={translate3} />
                        <animated.img src={image4} alt="" className='image2' style={translate4}/>
                    </ImageWrapper>

                    <SlidesWrapper>
                        <Slides onClick={() => { toggle(1) }} style={active1}>
                            <p>&#9830;</p> <h3>1</h3>
                        </Slides>
                        <Slides onClick={() => { toggle(2) }} style={active2}>
                            <p>&#9830;</p> <h3>2</h3>
                        </Slides>
                        <Slides onClick={() => { toggle(3) }} style={active3}>
                            <p>&#9830;</p> <h3>3</h3>
                        </Slides>
                    </SlidesWrapper>
                </PageWrapper>
                <PageWrapper className="tertiaryBg thirdPage" style={fade3}>
                    <Description style={props3}>
                        <h1>Alfred Smith</h1>
                        <h3>Explorer @Expedia</h3>
                        <p>And thing seas, were isn't all heaven is evening. Give.</p>
                    </Description>
                    <ImageWrapper style={props3}>
                        <animated.img src={image5} alt="" className='image1' style={translate5}/>
                        <animated.img src={image6} alt="" className='image2' style={translate6}/>
                    </ImageWrapper>

                    <SlidesWrapper>
                        <Slides onClick={() => { toggle(1) }} style={active1}>
                            <p>&#9830;</p> <h3>1</h3>
                        </Slides>
                        <Slides onClick={() => { toggle(2) }} style={active2}>
                            <p>&#9830;</p> <h3>2</h3>
                        </Slides>
                        <Slides onClick={() => { toggle(3) }} style={active3}>
                            <p>&#9830;</p> <h3>3</h3>
                        </Slides>
                    </SlidesWrapper>
                </PageWrapper>
            </Background>
        </Layout>
    );
};

export default DesignPage;



const PageWrapper = styled(animated.main)`
height: 100vh;
width:100%;
color:white;
display: grid;
grid-template-columns: 5% 1.5fr 3fr 0.5fr 5%;

@media screen and (max-width:740px) {
    grid-template-columns: 5% 3fr 0.5fr 5%;
}

`





const Description = styled(animated.div)`
    grid-column:2/3;
    align-self: end;
    bottom:0;

@media screen and (max-width:740px) {
    grid-column: 2/3;
}

h1{
    font-size: 36px;
    text-shadow: 1px 1px 1px black;
}    

h3 {
    margin: 10px 0;
    font-size: 24px;
    text-shadow: 1px 1px 1px black;
}    

p{
    margin-bottom: 80px;
    font-size: 18px;
    font-style: italic;
    font-weight:550;
    margin-right: 20px;
}

`

const ImageWrapper = styled(animated.div)`
    max-width:50%;
    align-self:center;
    position:relative;
  display:flex;

  @media screen and (max-width:740px) {
    grid-column: 2/3;
}

img {
    max-width:100%;
    transition: transform 0.3s ease-out;
   
}


.image1{
    transform: translate(0,3%);
    margin-right: 2px;
}



.image2{
    transform: translate(0,-3%);
}

&:hover {
    .image1 {
    transform: translate(0,0%);
    }
.image2 {
    transform: translate(0,0%);
}
}


`

const SlidesWrapper = styled.div`
align-self:center;
justify-self:center;
`

const Slides = styled(animated.div)`
display:flex;
align-items:center;
margin: 20px 0; 
cursor: pointer;

opacity:0.5;
transition: 0.3s ease-in-out;

&:hover {
    opacity:1;
}

p {
    margin: 0 10px;
}

p:hover {
    animation: scale 0.5s ease-in-out infinite alternate;
}

@keyframes scale {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.75);
    }
}

`

const Background = styled.section`

position: relative;
.primaryBg {
    background: radial-gradient(rgba(141, 78, 97, 0.925),rgba(207, 23, 54, 0.89));
}
.secondaryBg {
    background: radial-gradient(rgba(8, 241, 33, 0.625),rgba(25, 100, 22, 0.9));
}
.tertiaryBg {
    background: radial-gradient(rgba(78, 93, 141, 0.925),rgba(124, 23, 207, 0.89));
}


  .secondPage, .thirdPage {
    position:absolute;
    top:0;
    width:100%;
    opacity:0;
}

.firstPage {
    z-index:2;
}



`