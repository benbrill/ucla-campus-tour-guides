import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
      <h1 className={styles.titleFont}>Check slack ya dummies</h1>
      <StaticImage src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
