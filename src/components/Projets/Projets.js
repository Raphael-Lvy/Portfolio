import React from 'react';
import styled from 'styled-components';

import CardProjet from '../CardProjet/CardProjet';

const Projets = ({ data }) => {


    return (
        <ProjetsContainer>
            <ProjetTitle>
                Projets
        </ProjetTitle>
            <ProjetsGrid>
            {data.allPortfolioProjectsJson.edges.map((projet) => {
                const name = projet.node.name;
                const id = projet.node.id;
                const description = projet.node.description;
                const image = projet.node.photo;
                
                return(
                    <CardProjet name={name} description={description} image={image} key={id}/>
                )
                    
                
            })}
            
       
            </ProjetsGrid>
            
           
        </ProjetsContainer>
    );
};






const ProjetsContainer = styled.section`
width: 100vw;
background: linear-gradient( to top ,rgb(100, 100, 100) 0%,rgb(30, 30, 30)  100%) ;
display:flex;
flex-direction:column;
position: relative;
`
const ProjetTitle = styled.h1`
display:flex;
justify-content:center;
margin: 3rem 0 1rem;
color: white;
font-size: 2rem;
`

const ProjetsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2rem;
padding: 2rem;

@media screen and (max-width: 1400px) {
    grid-template-columns: 1fr  ;
}

`

const Card = styled.div`
height: 40vh;
box-shadow: 0 0 4px var(--secondary-color);
border-radius: 10px;
background: white;
display: flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
position: relative;
transition:  0.3s ease-in-out;

&:hover {
    color:white;
    
    background:rgb(70, 70, 70);
}

`


export default Projets;