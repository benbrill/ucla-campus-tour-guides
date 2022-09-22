import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './index.module.css'
import { Button } from 'react-bootstrap'
import InfoSessions from './infosessions'

const Explainer = () => {
  return (
    <div style={{position: "relative"}}>
    <div className = {styles.pictureContainer}>
        <div id = {styles.picture1} >
            <StaticImage src = "../images/home_page/home_page_1.jpg" aspectRatio={16/8} transformOptions = {{cropFocus: "north"}}/>
        </div>
        <div className = {styles.textContainer}>
            <div className = {styles.explainerText} style = {{marginLeft: "auto"}}>
            UCLA Campus Tours represents UCLA Undergraduate Admissions by providing comprehensive walking and virtual campus tours to prospective freshman, transfer, and admitted students. 
            UCLA Campus Tour Guides are paid to make meaningful impacts on prospective students from around the world.

            </div>
            <div style = {{display: "flex", marginTop: "20px", maxWidth : "600px", marginLeft: "auto"}}>
             <Button className = {styles.button} href = "https://connect.admission.ucla.edu/register/ApplyCampusTours2023" target="_blank">Apply!</Button>
            </div>
        </div>
        
    </div>
    <InfoSessions />
    <div className = {styles.pictureContainer}>
        <div id = {styles.picture2}>
                <StaticImage src = "../images/home_page/home_page_2.jpg" aspectRatio={16/8} transformOptions = {{cropFocus: "south"}}/>
        </div>
        <div className = {styles.textContainer} id = {styles.container2}>
            <div className = {styles.explainerText} >
            As a UCLA Campus Tour Guide, you will be welcomed into a tight-knit community of students with diverse 
            interests but the common goal of inspiring students of all backgrounds to pursue higher education.
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