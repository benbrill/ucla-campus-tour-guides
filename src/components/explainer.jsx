import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './index.module.css'
import { Button } from 'react-bootstrap'

const Explainer = () => {
  return (
    <div style={{position: "relative"}}>
    <div className = {styles.pictureContainer}>
        <div id = {styles.picture1} >
            <StaticImage src = "../images/home_page/home_page_1.jpg" aspectRatio={16/8} transformOptions = {{cropFocus: "north"}}/>
        </div>
        <div className = {styles.textContainer}>
            <div className = {styles.explainerText} style = {{marginLeft: "auto"}}>
                UCLA Campus Tours is a student organization providing comprehensive walking and virtual campus tours to prospective freshman, transfer, and admitted students. 
                Our tour guides are passionate about inspiring students of all backgrounds to pursue higher education at a university with opportunities 
                for academic and personal growth. 
            </div>
            <div style = {{display: "flex", marginTop: "20px", maxWidth : "600px", marginLeft: "auto"}}>
             <Button className = {styles.button} >Apply!</Button>
            </div>
        </div>
        
    </div>
    <div className = {styles.pictureContainer}>
        <div id = {styles.picture2}>
                <StaticImage src = "../images/home_page/home_page_2.jpg" aspectRatio={16/8} transformOptions = {{cropFocus: "south"}}/>
        </div>
        <div className = {styles.textContainer} id = {styles.container2}>
            <div className = {styles.explainerText} >
            Being a UCLA tour guide connects you to a student network with diverse identities, interests, and involvements while also allowing you
            the opportunity to have a meaningful impact on prospective students from around the world. 
            </div>
            <div style = {{display: "flex", marginTop: "20px", maxWidth : "600px"}}>
             <Button className = {styles.button} href = "/guides">Meet the Guides!</Button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Explainer