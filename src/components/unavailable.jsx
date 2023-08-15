import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Unavailable = () => {
  return (
    <div style = {{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    <div style = {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <StaticImage src = "../images/Favicon.png" width={150} placeholder = "blurred" quality={100}/> 
        <div style = {{fontSize: "1.25rem", textAlign: "center",}}>uclacampustourguides.com</div>
      <div>
        <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Website not available</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            Unfortunately, the UCLA Campus Tour Guides website is unavailable at this time.
            This website is maintained on a personal basis, and is not maintained by UCLA Undergraduate Admission. As of August 12, 2023 -- the renewal date of the domain and hosting fees -- 
            we are unable to provide access at this time due to a combination of poor decision making and circumstances beyond our control.
            Please check back at a later date.
            Thanks!
        </div>
      </div>
 
    </div>
    </div>
  )
}

export default Unavailable