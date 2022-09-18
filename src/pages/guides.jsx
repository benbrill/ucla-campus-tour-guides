import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import GuideCard from '../components/guideCard'
import { Row, Col, CardGroup, Container} from 'react-bootstrap'
import Menu from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Guides = ({data}) => {
  

  return (
    <>
    <Menu />
    <Seo title="Meet the Guides">


    <div>
      <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Meet the Guides</div>
      <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto"}}>
        Here's a little explainer about why you should meet our tour guides and they are super diverse and great
        and you should apply
      </div>
    </div>

    <div>
      
    </div>
    <Container fluid = "sm" style = {{padding: "3rem"}}>
        <Row xs={2} md = {3} lg={5}>
            {data.allDataYaml.nodes[1].Guides.map(guide => (
            <>
            <Col style = {{padding: "0.5rem 0.2rem"}}>
             <div style = {{position: "absolute", zIndex: 1, backgroundColor: "#2774AE", color: "#ffffff", width: "120px", margin: "7px 7px", textAlign: "center", fontSize: "0.8rem"}}>{guide.position}</div> 
            <GuideCard props = {guide}/>
            </Col>
            </>
        ))}
        </Row>
      </Container>
      
      
      
    
    </Seo>
    </>
  )
}

export const query = graphql`
query MyQuery {
    allDataYaml {
      nodes {
        Guides {
          image_path {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1, transformOptions: {cropFocus: CENTER})
            }
          }
          name
          pronoun
          hometown
          position
          major
          minor
          involvements
          fun_fact
          year
        }
      }
    }
  }
  
  
`

export default Guides