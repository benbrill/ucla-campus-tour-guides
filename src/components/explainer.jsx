import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Explainer = () => {
  return (
    <div style = {{width: "100%", height: "100%", position: "relative"}}>
        <div style = {{float: "right", width: "70%", height: "20rem"}}>
            <StaticImage src = "../images/home_page/home_page_1.jpg" aspectRatio={16/9} transformOptions = {{cropFocus: "north"}}/>
        </div>
        
        <div style = {{width: "50%", backgroundColor: "#ffffff", zIndex: 2, position: "absolute", top: "10rem", padding: "10px 100px 10px 100px", }}>
            <div style = {{fontSize: "1.1rem", maxWidth: "600px", marginLeft: "auto", textAlign: "center", fontWeight: "600"}}>
            UCLA Campus Tours is a student organization providing comprehensive walking and virtual campus tours to prospective freshman, transfer, and admitted students. 
            Our tour guides are passionate about inspiring students of all backgrounds to pursue higher education at a university with opportunities 
            for academic and personal growth. 
            </div>
        
        
        </div>
    </div>
  )
}

export default Explainer