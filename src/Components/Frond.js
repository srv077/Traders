import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Frond.css"
import videos from "../videos/videofrond.mp4"

export default function Frond() {
  return (
    <>
    <div id="frond-full">
      <video autoPlay muted width={"100%"} height={"99%"} loop src={videos} type='video/mp4'></video>
      <div id="frond-center">
       Be part of the Democratization of Stock Market !
       <Link style={{textDecoration:'none'}} to="signupform"><button id="signup">Join Now</button></Link>
      </div>
    </div>
    
    </>
  )
}
