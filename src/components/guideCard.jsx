import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Button from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

const GuideCard = ({props}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div onClick = {handleShow}>
            <a onClick={handleShow} style = {{cursor: "pointer"}}>
            <GatsbyImage image = {props.image_path.childImageSharp.gatsbyImageData} />
            </a>
            <div style = {{padding: "10px 0 0 0"}}>
                <a onClick={handleShow} style = {{cursor: "pointer"}}>
                <div to = {props.web_path} style= {{fontFamily : "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "1.4rem", lineHeight: "1rem"}}>{props.name}</div>
                </a>

                <div style = {{fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: "1rem", padding:"5px 0px"}}>{props.year} // {props.major}</div>
            </div>
            
        </div>
            
        <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Container class="show-grid">
                <Row>
                    <Col lg = {6} md = {12}>
                        <GatsbyImage image = {props.image_path.childImageSharp.gatsbyImageData} />
                    </Col>
                    <Col lg = {6} md = {12} className = "py-3">
                        <div style = {{fontFamily : "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "2.5rem", lineHeight: "1rem"}}>
                            {props.name}<span style={{fontSize: "1rem", fontWeight: "400"}}>{props.pronouns}</span>
                        </div>
                        <div style = {{padding: "10px 0"}}>
                        Year: {props.year}<br/>
                        Major: {props.major}<br/>
                        Involvements: {props.involvements}<br/>
                        Fun Fact: {props.fun_fact}<br/>

                        </div>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
         </Modal>
        </>
        
    )
}

export default GuideCard
