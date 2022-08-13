import React from 'react'
import { Card } from 'react-bootstrap'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import'../static/card.scss'

const GuideCard = ({props}) => {
    return (
        
        <Card id = "photoCard">
            <Link to = {props.web_path}><Card.Title className = "title">{props.name}</Card.Title></Link>
            <Link to = {props.web_path}><GatsbyImage image = {props.image_path.childImageSharp.gatsbyImageData}/></Link>
            <Card.Text class="text">{props.description}</Card.Text>
            <Card.Text class="footer"><em>{props.date}</em></Card.Text>
        </Card>
        
    )
}

export default GuideCard
