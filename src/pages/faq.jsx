import React from 'react'
import Menu from '../components/navbar'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'

const FAQ = ({data}) => {
  return (
    <div>
        <Seo title = "FAQs" />
        <Layout>
        <div>
        <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Frequently Asked Questions</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            These are answers to some of the most common questions we get regarding the Campus Tour Guide application. 
            If you have any further questions, ask us on the contact page!
        </div>

        <Container fluid = "sm">
        {data.allDataYaml.nodes[0].FAQs.map(faq => 
            (<>
            <div style = {{paddingBottom: "10px"}}>
                <div style={{fontWeight: 600}}>{faq.question}</div>
                <div>{faq.answer}</div>
            </div>
            </>
            ))}
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