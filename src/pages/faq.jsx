import React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import { Accordion } from 'react-bootstrap'

const FAQ = ({data}) => {
  const faqs = data.allDataYaml.nodes[0]?.FAQs || []; // Fallback to an empty array if data is missing

  return (
    <div>
        <Seo title="FAQs" />
        <Layout>
        <div>
          <div style={{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Frequently Asked Questions</div>
          <div style={{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            These are answers to some of the most common questions we get regarding the Campus Tour Guide application.
          </div>

          <Container fluid="sm">
            <Accordion>
              {faqs.length > 0 ? (
                faqs.map(faq => (
                  <Accordion.Item eventKey={faq.question} key={faq.question}>
                    <Accordion.Header style={{fontWeight: 600}}>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))
              ) : (
                <div>No FAQs available at the moment.</div>
              )}
            </Accordion>
          </Container>
        </div>
        </Layout>
    </div>
  );
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