import React from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


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
        const difference = +new Date(`${year}-10-13`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)) -1,
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24) -17,
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
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem"}}>
        <Button href="https://connect.admission.ucla.edu/register/ApplyCampusTours2023" 
        style = {{fontSize: "1.5rem", backgroundColor: "#2774AE",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 600,
        borderRadius: 0}}
        target="_blank">
          Apply!
        </Button>
      </div>
    </div>
  )
}

export default Countdown