import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import VisibilitySensor from '../VisibilitySensor';

const CardProjet = ({ name, description, image, url }) => {



    return (
        <VisibilitySensor bottomOffset={500} delay={750}>
        <Card>
            <Description>
                <Title>{name}</Title>
                
                <Content>{description}</Content>
                <div className='btn'>
                <Button primary={false} small={true} >
                    <a href={url} target='blank'>Découvrir le site</a>
                    </Button>
                    </div>
            </Description>
            
            <ImageWrapper >
                <Image src={image.childImageSharp.fluid.src} alt={description} loading="lazy" />
                <div className='middle'>
                <Button primary={true} small={true} >
                <a href={url} target='blank'>Voir</a>
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
color: black;
height:100%;
box-shadow: 0px 0px 10px rgba(0,0,0,1);

background-image: linear-gradient(to bottom, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);


.btn {
    transition : 0.7s ease;
}

@media screen and (min-width:1400px){
    height: 100%;
}

@media screen and (max-width:740px) {
    flex-direction:column;
    justify-content:space-between;
    min-height:100%;
   
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
border-bottom: 1px solid gray;
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
    filter: brightness(0.35);
    background:rgba(0,0,0,0,5);
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
   box-shadow: 0px 0px 10px rgba(0,0,0,1);
   filter: brightness(1);
   transition: 0.5s ease-in-out;
   position:relative;

   @media screen and (max-width:740px) {
   max-width:100%;
   max-height:100%;
}

`



export default CardProjet;


