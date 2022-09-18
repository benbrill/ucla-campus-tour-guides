import React from 'react'
import Seo from '../components/seo'
import Menu from '../components/navbar'
import Layout from '../components/layout'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <Seo title = "Contact">
    <Layout> 
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
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </Layout>
    </Seo>

  )
}

export default Contact 