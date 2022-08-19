import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { StaticImage } from 'gatsby-plugin-image'

const Menu = () => {
  return (
    <Navbar expand = "sm" sticky = "top" style={{ backgroundColor:  '#2774AE'}}>
    <Container>
      
    <Navbar.Brand href="/" style={{ color: "white", fontFamily : "Arial", fontSize : "1rem", fontWeight: 600}}>
      <div style = {{display: "flex", alignItems: "center"}}>
      <StaticImage src = "../images/circle_logo.png" width={40} aspectRatio = {1} placeholder = "blurred"/> 
      {/* <StaticImage src = "../images/cartoon_royce.png" width={40} aspectRatio = {1} placeholder = "blurred"/> */}
      <div style = {{lineHeight: "1.1rem", paddingLeft: "10px", fontFamily: "Inter, sans-serif"}}>UCLA <br /> <span style = {{fontWeight: "400"}}> Campus Tour Guides </span></div>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content flex-end" style = {{justifyContent: "flex-end"}} />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content flex-end" style = {{justifyContent: "flex-end"}}>
    <Nav className="justify-content-end" style = {{justifyContent: "flex-end"}} >
      <Nav.Link href="/guides" style={{ color: 'white', fontFamily: "Inter, sans-serif"}}>Meet the Guides</Nav.Link>
      <Nav.Link href="/data" style={{ color: 'white', fontFamily: "Inter, sans-serif"}}>Application</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu