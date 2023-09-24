import React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import { Accordion } from 'react-bootstrap'

const FAQ = ({data}) => {
  return (
    <div>
        <Seo title = "FAQs" />
        <Layout>
        <div>
        <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Frequently Asked Questions</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            These are answers to some of the most common questions we get regarding the Campus Tour Guide application. 
            The application to become a UCLA Tour Guide is now closed. Please check in Fall 2023 for our next application cycle
        </div>

        <Container fluid = "sm">
          <Accordion>
        {data.allDataYaml.nodes[1].FAQs.map(faq => 
            (<>
            
            <Accordion.Item eventKey = {faq.question}>
                <Accordion.Header style={{fontWeight: 600}}>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
            </>
            ))}
            </Accordion>
        </Container>
    </div>
    </Layout>
    </div>
  )
}

export const query = graphql`
query FAQuery {
    allDataYaml {
      nodes {
        FAQs {
          question
          answer
        }
      }
    }
  }
`

export default FAQ