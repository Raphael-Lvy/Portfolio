import React from 'react';
import styled from 'styled-components';
import CardProjet from '../CardProjet/CardProjet';


const Projets = ({ data }) => {


    return (
        <ProjetsContainer name='Projets'>
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
display:flex;
flex-direction:column;
align-items: center;
position: relative;
`
const ProjetTitle = styled.h1`
display:flex;
justify-content:center;
margin: 3rem 0 1rem;
color: white;
text-shadow: 2px 2px 1px gray;
letter-spacing:0.15rem;
font-size: 2rem;
border-bottom: 1px solid gray;
padding : 0 15% 1rem 15%;
`

const ProjetsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2rem;
padding: 2rem;

@media screen and (max-width: 1400px) {
    grid-template-columns: 1fr  ;
}

@media screen and (min-width:550px) {
    padding: 2rem 5rem;
}

`




export default Projets;