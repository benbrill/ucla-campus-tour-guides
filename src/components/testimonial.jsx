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
                Join <br />
                Tours <br /> 
                <span style = {{fontWeight: "bold"}}>Today</span> 
                </div>
            <div className = {styles.testimonialBody}>
            Each of our tour guides use their own unique, personal experiences to give their guests real insights into the life 
            of an active UCLA student. If you have a story you would like to share about your UCLA journey,
            we encourage you to apply to Campus Tours. 
            </div>
        </div>
            <div className={styles.testimonialVid}>
            <iframe
            src="https://drive.google.com/file/d/1nGV_tl2TaYHT7FbQN-m8qT1Ygwow9Aae/preview"
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