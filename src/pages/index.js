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
      
       We are currently accepting applications for the Fall 2024 hiring class!
      </div>
    
      </div>
    <HeroLanding />
    <div style={{display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
      

      
    </div>
    <Countdown />
    {/*
    <div style = {{backgroundColor: "#ff5d00", width: "100%", minHeight: "30px", color: "#ffffff", textAlign: "center",
      display: "flex", marginTop: "50px", flexDirection: "column"}}>
      <div style = {{margin: "auto auto", padding: "10px 0"}}> 
      New <Link to = "https://www.duffl.com/?view=Landing" style = {{color: "#ffffff"}} target = "_blank">Duffl</Link> users can use the code "campustours" for $5 off their first order! 
      </div>
    
      </div>
      */}
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
