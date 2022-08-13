import React from 'react'
import { useEffect, useState } from 'react';


const styles = {
    timeFields: 
    {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        minWidth: "5rem", 
        // backgroundColor: "#ffffff",
        margin: "0.5rem"
    },
    countdownBox: 
    {
            display: "flex",
            justifyContent: "space-evenly", 
            // backgroundColor: "#111111"
    },
    }

const Countdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-10`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
    
        timerComponents.push(
          <div style = {styles.timeFields}>
            <div style ={{fontSize : "3rem", fontFamily: "Arial, sans-serif", fontWeight: "Bold"}}>{timeLeft[interval]} </div> {" "}
            <div style = {{fontFamily: "Arial, sans-serif"}}>{interval}{" "}</div>
          </div>
        );
      });
  return (
    <div>
      <div style={{fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "Bold", fontSize: "3rem", textAlign: "center"}}>Application due in</div>
      <div style= {styles.countdownBox}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  )
}

export default Countdown