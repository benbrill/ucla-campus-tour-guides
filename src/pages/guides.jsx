import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import GuideCard from '../components/guideCard'
import { Row, Col, CardGroup, Container} from 'react-bootstrap'
import Menu from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Guides = ({data}) => {
  
  let dataSorted = data.allDataYaml.nodes[0].Guides.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  return (
    <>
    <Menu />
    <Seo title="Meet the Guides">


    <div>
      <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Meet the Guides</div>
      <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto"}}>
        Our campus tour guides represent a diverse group of identities, interests, and involvements who are passionate about sharing their experiences with prospective students.
        Click on a guide to learn more about them!
      </div>
    </div>
    <div>
      <div style = {{fontSize: "2rem", textAlign: "center", fontWeight: "bold", paddingTop: "10px"}}>About the positions</div>
      <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto"}}>
      Our three coordinators Itai, Jessica and Kevin manage the programs' scheduling, internal operations, and special program logistics, respectively. They work alongside UCLA Undergraduate Admissions to direct Campus Tours. 
      We have six lead tour guides (LTGs) ; each of our LTGs lead a cohort of new hires in guiding them through training and assimilating into the program. They also  assist in overseeing our office, emails and phone calls.

      </div>
    </div>

    <div>
      
    </div>
    <Container fluid = "sm" style = {{padding: "3rem"}}>
        <Row xs={2} md = {3} lg={5}>
            {dataSorted.map(guide => (
            <>
            <Col style = {{padding: "0.5rem 0.2rem"}}>
             <div style = {{position: "absolute", zIndex: 1, backgroundColor: "#2774AE", color: "#ffffff", maxWidth: "120px", margin: "7px 7px", textAlign: "left", fontSize: "0.8rem", padding: "0px 7px"}}>{guide.position}</div> 
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