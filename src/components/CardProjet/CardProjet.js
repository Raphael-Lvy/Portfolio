import React from 'react';

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import Button from '../Button/Button';
import VisibilitySensor from '../VisibilitySensor';

const CardProjet = ({ name, description, image }) => {



    return (
        <VisibilitySensor>
        <Card>
            <Description>
                <Title>{name}</Title>
                
                <Content>{description}</Content>
                <div className='btn'>
                <Button primary={true} small={true} >
                    Voir le site
                    </Button>
                    </div>
            </Description>
            
            <ImageWrapper >
                <Image src={image.childImageSharp.fluid.src} alt={description} />
                <div className='middle'>
                <Button primary={true} small={true} >
                    Voir
                    </Button>
                </div>
                </ImageWrapper>
                
        </Card>
        </VisibilitySensor>
    );
};


const Card = styled.div`

padding: 1rem;
border-radius: 10px;
display:flex;
align-items:center;
justify-content:space-around;
position: relative;
transition: 0.5s linear;
color: white;


&:hover {
    background: rgba(10,10,10,0.4)
}

.btn {
    transition : 0.7s ease;
}

@media screen and (min-width:1400px){
    height: 45%;
}

@media screen and (max-width:740px) {
    flex-direction:column;
    justify-content:space-between;
    min-height:70%;
   
}

.middle {
    transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
`

const Description = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding: 1rem 1rem;
max-width:50%;
border: 1pw solid gray;
height:100%;

@media screen and (max-width:740px) {
max-width:100%;

}
`

const Title = styled.p`
text-transform: uppercase;
font-weight: bold;
font-size: 1.25rem;
border-bottom: 1px solid lightgray;
padding-bottom:0.25rem;

`

const Content = styled.p`
align-items:center;
padding:1rem 0;

@media screen and (max-width:415px) {
    font-size:0.85rem;
}
`
const ImageWrapper = styled.div`
padding:0.5rem 0.5rem;
max-height:100%;
max-width:100%;
position: relative;
&:hover  img {
    filter: opacity(0.3);
}

&:hover .middle {
    opacity:1;
}

@media screen and (max-width:740px) {
max-width:100%;

}
`

const Image = styled.img`
   max-height:100%;
   max-width:100%;
   border-radius:10px;
   object-fit: fit;
   
   filter: opacity(1);
   transition: 0.5s ease-in-out;
   position:relative;

   @media screen and (max-width:740px) {
   max-width:100%;
   max-height:100%;
}

`



export default CardProjet;


