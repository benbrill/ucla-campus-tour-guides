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
                <br />Information Sessions <br />
                </div>
            <div className = {styles.testimonialBody}>
            We have two sessions: <br />
1) Thursday, October 5, 6 - 7 PM in Kaplan Hall Room 135 <br />
 2) Monday, October 9, 6 - 7 PM in Boelter Hall Room 2444 <br />
During the information sessions you’ll get the chance to talk to current guides about their experience and get some insight into the application process!
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