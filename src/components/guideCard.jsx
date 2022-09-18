import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
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
                <div to = {props.web_path} style= {{fontFamily : "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "1.3rem", lineHeight: "1.3rem"}}>{props.name}</div>
                </a>

                <div style = {{fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: "1rem", padding:"5px 0px"}}>{props.year} // {props.major}</div>
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
                        <div style = {{fontFamily : "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "2.5rem", lineHeight: "2.3rem"}}>
                            {props.name}<span style={{fontSize: "1rem", fontWeight: "400"}}>{props.pronoun}</span>
                        </div>
                        <div style = {{padding: "10px 0"}}> 
                        <span style = {{fontWeight: 600}}>Year: </span>
                         {props.year}<br/>
                         <span style = {{fontWeight: 600}}>Hometown: </span>
                         {props.hometown}<br/>
                         <span style = {{fontWeight: 600}}>Major: </span> {props.major}<br/>
                        {(props.minor != null) &&
                            <div><span style = {{fontWeight: 600}}>Minor: </span> {props.minor}</div>}
                        <hr/>
                        <span style = {{fontWeight: 600}}>Involvements: </span> {props.involvements}<br/>
                        <span style = {{fontWeight: 600}}>Fun Fact: </span> {props.fun_fact}<br/>

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
