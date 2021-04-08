import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero';
import Projets from '../components/Projets/Projets'
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const IndexPage = ({ data }) => {

  return (
    <Layout>

      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
     
      <About />
      <Projets data={data} />
      <Contact/>
    </Layout>)
}


export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
    allPortfolioProjectsJson {
      edges {
        node {
          id
          description
          name
          photo {
            childImageSharp {
              fluid ( quality: 100){
                ...GatsbyImageSharpFluid
              }
                
              
            }
          }
        }
      }
    }
  }
`



export default IndexPage

