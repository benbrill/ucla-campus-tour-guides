import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import GuideCard from '../components/guideCard'
import { Row, Col, CardGroup } from 'react-bootstrap'

const guides = ({data}) => {
  return (
    <>
    <Seo>
    <CardGroup>
        <Row xs={1} md={3}>
            {data.dataYaml.Guides.map(guide => (
            <Col style = {{display: "flex"}}>
            <GuideCard props = {guide}/>
            </Col>
        ))}
        </Row>
    </CardGroup>
    
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
            gatsbyImageData
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

export default guides