import React from 'react'
import Seo from '../components/seo'
import Menu from '../components/navbar'
import Layout from '../components/layout'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Footer from '../components/footer'
import { useState } from 'react'
import { navigate } from 'gatsby'

const Contact = () => {

  const initialFormData = Object.freeze({
    name: "",
    email: "",
    question: ""
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {alert("Thank you for your submission");
    })
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };

  return (
    <Seo title = "Contact">
    <Layout> 
    <div>
        <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Contact us!</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            Fill out the form below to reach us or email us at <a href = "mailto:apply.uclatours@gmail.com">here</a>
        </div>
    </div>
    <Form onSubmit={ handleSubmit } id = "myForm" data-netlify = "true">
      <input type="hidden" name="form-name" value="myForm" />
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange= {handleChange} type="text" placeholder="name" name = "name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange= {handleChange} type="email" placeholder="Enter email" name = "email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlID="question">
                <Form.Label>Your question</Form.Label>
                <Form.Control onChange= {handleChange} type="text" as="textarea" rows={3} placeholder = "question" name = "question"/>
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