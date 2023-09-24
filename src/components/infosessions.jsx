import React from 'react'

const styles = {
    sessionTitle: {
        fontSize: "2rem",
        fontWeight: 600,
    },
    infoSessionContainer: {
        paddingBottom: "10px"
    },
    container: {
        margin: "0 auto",
        maxWidth: "800px",
        padding: "10px"
    }
}
const InfoSessions = () => {
  return (
    <div style = {{color: "#ffffff", backgroundColor: "#2774AE"}}>
        <div style = {{fontSize: "3rem", textAlign: "center", fontWeight: "bold"}}>Info Sessions</div>
        <div style = {{textAlign: "center", maxWidth: "600px", margin: "auto", paddingBottom: "20px"}}>
            If you are interested in applying to Campus Tours or just want to learn more about our program,
            stop by one of our info sessions! Current guides will be present to answer any questions you may have
        </div>

        <div style = {styles.container}>
        <div style={styles.infoSessionContainer}>
            <div style = {styles.sessionTitle}>Info Session 1</div>
            <div>Location TBD, October 5th 6:00 PM - 7:00 PM</div>
            <div> <em> Recording coming soon!</em></div>
        </div>
        <div>
            <div style = {styles.sessionTitle}>Info Session 2</div>
            <div>Location TBD, October 9th 6:00 PM - 7:00 PM</div>
            <div> <em> Recording coming soon!</em></div>
        </div>
        </div>
    </div>
  )
}

export default InfoSessions