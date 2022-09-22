import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Links = () => {
  return (
    <Layout >
        <Seo title='Links Sessions'></Seo>
         <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Links Sessions</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            If you are interested in applying to Campus Tours or just want to learn more about our program,
            stop by one of our info sessions! Current guides will be present to answer any questions you may have
        </div>
        
    </Layout>
    
  )
}

export default Links