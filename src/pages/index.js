import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Countdown from "../components/countdown"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss'
import Menu from '../components/navbar'
import HeroLanding from "../components/herolanding"
import Explainer from "../components/explainer"
import Testimonial from "../components/testimonial"
import Footer from "../components/footer"



const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Menu />
    <div style = {{backgroundColor: "#2774AE", width: "100%", minHeight: "30px", color: "#ffffff", textAlign: "center",
      display: "flex"}}>
      <div style = {{margin: "auto auto", padding: "10px 0"}}> 
      Applicants concerned about the summer requirment are encouraged to apply regardless of summer availability.
       See the <Link to = "/faq" style = {{color : "#ffffff"}}>FAQ</Link> page for more details
      </div>
    
      </div>
    <HeroLanding />
    <div style={{display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
      {/* hero */}
      
      
      
    </div>
    <Countdown />
    <div style = {{backgroundColor: "#ff5d00", width: "100%", minHeight: "30px", color: "#ffffff", textAlign: "center",
      display: "flex", marginTop: "20px", flexDirection: "column"}}>
      {/* <StaticImage src="../images/duffl.png" alt="" width = {3} aspectRatio = {1}/> */}
      <div style = {{margin: "auto auto", padding: "10px 0"}}> 
      New <Link to = "https://www.duffl.com/?view=Landing" style = {{color: "#ffffff"}} target = "_blank">Duffl</Link> users can use the code "uclacampustours" for $5 off their first order! 
      </div>
    
      </div>
    <Explainer />
    <Testimonial />
    <Footer />
    </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />  

export default IndexPage
