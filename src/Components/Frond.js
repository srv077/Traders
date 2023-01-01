import React from 'react'
import "../Style/Frond.css"
import videos from "../videos/videofrond.mp4"

export default function Frond() {
  return (
    <>
    <div id="frond-full">
      <video autoPlay muted width={"100%"} height={"99%"} loop src={videos} type='video/mp4'></video>
      <div id="frond-center">
       Be part of the Democratization of Stock Market !
      <button>Join now</button>
      </div>
    </div>
    
    </>
  )
}
