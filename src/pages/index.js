import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
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
    <HeroLanding />
    <div style={{display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
      {/* hero */}
      
      
      
    </div>
    <Countdown />
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
