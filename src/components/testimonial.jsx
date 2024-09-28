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

        
            {/* Replace the video with an Instagram link */}
        <div className={styles.testimonialVid}>
          <div className={styles.testimonialInstagramText}>
            Click below to check out our Instagram!
          </div>
          <a href="https://www.instagram.com/uclacampustours/" target="_blank" rel="noopener noreferrer">
            <StaticImage 
              src="../images/instagram_logo_2.png" // Replace with your Instagram icon or a suitable image
              alt="Follow us on Instagram"
              className={styles.instagramImage}
            />
          </a>
        </div>
    </div>
  )
}

export default Testimonial