import React from 'react'
import Seo from '../components/seo'
import Menu from '../components/navbar'
import Layout from '../components/layout'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Footer from '../components/footer'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <Seo title = "Contact">
    <Layout> 
    <div>
        <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Contact us!</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            Fill out the form below to reach us or email us at <a href = "mailto:apply.uclatours@gmail.com">here</a>
        </div>
    </div>
    <Form onSubmit={ handleSubmit } id = "myForm">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlID="question">
                <Form.Label>Your question</Form.Label>
                <Form.Control type="text" as="textarea" rows={3} placeholder = "question"/>
      </Form.Group>
        
      <Button variant="primary" type="submit" style = {{color: "#ffffff", backgroundColor: "#2774AE", borderRadius: 0, marginTop: "10px"}}>
        Submit
      </Button>
    </Form>
    </Layout>
    </Seo>

  )
}

export default Contact 