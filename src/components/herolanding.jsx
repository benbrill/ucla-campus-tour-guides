import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const styles = {
    triangle: {
        borderStyle: "solid",
        borderWidth: "20rem 0 0 35rem",
        borderColor:"transparent transparent transparent #ffffff",
        position: "absolute",
        zIndex: 1,
        bottom: "2rem",
    }
}
const HeroLanding = () => {
  return (
    <div style = {{width: "100%"}}>
        <div style = {styles.triangle}></div>
        <StaticImage src="../images/cover_photo_1.jpg" layout="FULL_WIDTH" aspectRatio={16/6} placeholder="blurred" />
    </div>
  )
}

export default HeroLanding