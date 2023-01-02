import React from 'react'
import '../Style/Account.css'

export default function Account() {
  return (
    <div id="accountdet">
      <div id="accdetdiv" >
        <h3 style={{color:'white'}}>UNLIMITED ACCESS</h3>
        <h1 style={{color:'white'}}>Login At Any time</h1>
        <p style={{color:'white'}}>We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.</p>
        <button>Learn More</button>
      </div>
      <div id="accimgdiv"><img id="accimg" src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"></img></div>
    </div>
  )
}
