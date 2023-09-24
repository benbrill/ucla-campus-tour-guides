import React from 'react'
import * as styles from './index.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
        <div className={styles.testimonialTitleWrapper}>
            <div style = {{position: "absolute"}}>
                <StaticImage src = "../images/map_2.svg" quality = {90} />
            </div>
            
            <div className = {styles.testimonialTitle}>
                Take <br />
                a Tour <br /> 
                <span style = {{fontWeight: "bold"}}>Today</span> 
                </div>
            <div className = {styles.testimonialBody}>
            Each of our tour guides use their own unique, personal experiences to give their guests real insights into the life 
            of an active UCLA student. Each of our guides has a story they would like to share about their UCLA journey,
            and we encourage you to follow along. 
            </div>
        </div>
            <div className={styles.testimonialVid}>
            <iframe
            src="https://drive.google.com/file/d/1LZtA4XlPWMdZWESxNLTIKfJ0th7HaWUc/preview"
            title="Campus Tour Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            className={styles.vid}>
            </iframe>
            </div>
    </div>
  )
}

export default Testimonial