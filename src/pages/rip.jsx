import React from 'react'
import  Layout  from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const rip = () => {
  return (
    <Layout>
        <Seo title = "Commemoration"/>
        {/* <h1 style={{textAlign: "center", fontWeight: "bold"}}>In commemoration of the injustices committed against these guides</h1> */}
        <div style = {{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column'}}>
            <iframe src="https://open.spotify.com/embed/track/3A1lpeW9lJYP1tDOATEcCg?utm_source=generator&theme=0" style={{borderRadius: "12px", width:"75%", height:"152", frameBorder:"0", allowfullscreen:"", allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading:"lazy"}}></iframe>
        </div>
        {/* <div style={{display: 'flex'}}>
            <StaticImage src="../images/guide_photos/bbrill_3.jpg" aspectRatio={1} transformOptions={{cropFocus: "center"}}/>
            <StaticImage src="../images/guide_photos/jyang.jpg" aspectRatio={1} transformOptions={{cropFocus: "center"}}/>
        </div>
        <p style={{maxWidth: "100%", textAlign: "center", margin: "20px 0 0 0"}}>
        This is a commemoration to the guides who were unjustly terminated by UCLA Undergraduate Admissions, on the day of their graduation. These guides were loyal, competent, and passionate members of the program. They were the victims of an unnecessary vendetta carried out by supervisor Casey Shubin to weed out fun from the program. They were "terminated" after they had completed their final tour and no longer paid employees of the program, demonstrating the vindictive nature of the termination. The reason for their termination? They had shared a toast of Champagne presented by each of their parents on their final tour. This was a common practice among guides and was never an issue until Casey Shubin decided to make it one. These were the guides singled out. Do not forget the injustices committed against them.
        </p> */}
        To return
    </Layout>
  )
}

export default rip