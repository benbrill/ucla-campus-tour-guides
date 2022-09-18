import React from 'react'
import Menu from '../components/navbar'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'

const FAQ = ({data}) => {
  return (
    <div>
        <Seo title = "FAQ" />
        <Menu />
        <div>
        <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Frequently Asked Questions</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            Here's a little explainer about why you should meet our tour guides and they are super diverse and great
            and you should apply
        </div>

        <Container fluid = "sm">
        {data.allDataYaml.nodes[1].FAQs.map(faq => 
            (<>
            <div style = {{paddingBottom: "10px"}}>
                <div style={{fontWeight: 600}}>{faq.question}</div>
                <div>{faq.answer}</div>
            </div>
            </>
            ))}
        </Container>
    </div>
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