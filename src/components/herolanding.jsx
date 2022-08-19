import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import mapsvg from "../images/map_hero.svg"


const styles = {
    triangle: {
      borderStyle: "solid",
      borderWidth: "20rem 0 0 35rem",
      borderColor:"transparent transparent transparent #ffffff",
      position: "absolute",
      zIndex: 1,
      bottom: "0",
    }
}
const HeroLanding = () => {
  return (
    <div style = {{width: "100%", height: "100%", position: "relative"}}>
      <div style={{position: "absolute", zIndex: "1", width: "40%", bottom: "0px", left: "0%"}}>
      <StaticImage src="../images/triangle.svg" alt=""  width = {600} quality = {90} draggable = {false}/>  
      <div style={{position: "absolute", zIndex: "4", fontSize: "3rem", top: "50%", paddingLeft: "100px", lineHeight: "3rem"}}>
        Live.<br/> 
        Laugh.<br/>
        <span style={{fontWeight: 800}}>Tours.</span>
      </div>
      <div style = {{position: "absolute", zIndex: "3", top: "20%", left: "15px"}}>
          <img src = {mapsvg} quality={100} draggable = {false}/>
      </div>
      </div>
      
      
        <StaticImage src="../images/cover_photo_1.jpg" layout="FULL_WIDTH" aspectRatio={16/6} placeholder="blurred" quality = {90} draggable = {false}/>
    </div>
  )
}

export default HeroLanding