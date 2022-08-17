import { graphql } from 'gatsby'
import React, { useState } from 'react'
import Seo from '../components/seo'
import GuideCard from '../components/guideCard'
import { Row, Col, CardGroup, Container} from 'react-bootstrap'
import Menu from '../components/navbar'
import { Modal } from 'react-bootstrap'

const Guides = ({data}) => {
  

  return (
    <>
    <Menu />
    <Seo title="Meet the Guides">


    
    <Container fluid = "sm" style = {{padding: "3rem"}}>
        <Row xs={2} md = {3} lg={5}>
            {data.dataYaml.Guides.map(guide => (
            <Col style = {{padding: "0.5rem 0.2rem"}}>
            <GuideCard props = {guide}/>
            </Col>
        ))}
        </Row>
      </Container>
      
      
      
    
    </Seo>
    </>
  )
}

export const query = graphql`
query MyQuery {
    dataYaml {
      Guides {
        image_path {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1, transformOptions: {cropFocus: CENTER})
          }
        }
        name
        major
        web_path
        year
      }
    }
  }
  
  
`

export default Guides