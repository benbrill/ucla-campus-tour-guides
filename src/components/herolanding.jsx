import React from 'react'
import { StaticImage, GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
import mapsvg from "../images/map_hero.svg"
import * as styles from './navbar.module.css'
import { useStaticQuery, graphql } from 'gatsby'




const HeroLanding = () => {
  const data = useStaticQuery(graphql`
  query {
    desktop: file(
      relativePath: {eq: "cover_photo_1.jpg"}
    ) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 2.67, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    mobile: file(
      relativePath: {eq: "cover_photo_portrait.jpg"}
    ) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 1, placeholder: BLURRED, layout: FULL_WIDTH)
        
      }
    }
  }
  `)

  const images = withArtDirection(getImage(data.desktop), [
    {
      media: "(max-width: 600px)",
      image: getImage(data.mobile),
    }
  ])

  return (
    <>
        {/* <StaticImage src="../images/cover_photo_1.jpg" layout="FULL_WIDTH" aspectRatio={16/6} placeholder="blurred" quality = {90} draggable = {false}/> */}
        <div id = {styles.heroImageMobile}>
        <GatsbyImage image = {images} className = {styles.artDirected} />
        </div>
        
    <div style = {{width: "100%", height: "100%", position: "relative"}}>
      <div id = {styles.introTextContainer}>
      <div id = {styles.introText}>
        Live.<br/> 
        Laugh.<br/>
        <span style={{fontWeight: 800}}>Tours.</span>
      </div>
      <StaticImage src="../images/triangle.svg" alt=""  width = {600} quality = {90} draggable = {false} placeholder = "tracedSVG" id={styles.triangle}/>  
      <div className = {styles.mapContainer}>
          <img src = {mapsvg} quality={100} draggable = {false}/>
      </div>
      </div>
      
      
    </div>
    {/* } */}
    </>
  )
}


export default HeroLanding