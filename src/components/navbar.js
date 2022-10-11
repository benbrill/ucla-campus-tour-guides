import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './navbar.module.css'


const Menu = () => {
  return (
    <Navbar expand = "sm" sticky = "top" style={{ backgroundColor:  '#ffffff'}}>
    <Container>
      
    <Navbar.Brand href="/" style={{ color: "#000000", fontFamily : "Arial", fontSize : "1rem", fontWeight: 600}}>
      <div style = {{display: "flex", alignItems: "center"}}>
      <StaticImage src = "../images/logo_UCLA_blue_boxed.svg" width={80} placeholder = "blurred" quality={100}/> 
      {/* <StaticImage src = "../images/cartoon_royce.png" width={40} aspectRatio = {1} placeholder = "blurred"/> */}
      <div style = {{lineHeight: "1.1rem", paddingLeft: "10px", fontFamily: "Arial, helvetica, sans-serif"}}>Undergraduate Admission <br /> 
      <span style = {{fontWeight: "400", fontFamily: "Arial, helvetica, sans-serif"}}> Campus Tour Guides </span></div>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content flex-end" style = {{justifyContent: "flex-end"}} />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content flex-end" style = {{justifyContent: "flex-end"}}>
    <Nav className="justify-content-end" style = {{justifyContent: "flex-end", }} >
      <Nav.Link href="/guides" className={styles.navlink}>Meet the Guides</Nav.Link>
      <Nav.Link href="/faq" className={styles.navlink}>FAQ</Nav.Link>
      <Nav.Link href="/contact" className={styles.navlink}>Contact</Nav.Link>
      <Nav.Link href="https://connect.admission.ucla.edu/portal/tours" id={styles.apply} target="_blank">Book a Tour</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu