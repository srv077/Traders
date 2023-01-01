import React from 'react'
import "../Style/Footer.css"

export default function Footer() {
  return (
    <div id="footer-full">
      <div id="footer1">
        <div></div>
        <div className='footer1'>
            <div><h3>About Us</h3></div>
            <div>How it works</div>
            <div>Careers</div>
            <div>Terms of Service</div>
        </div>
        <div className='footer1'>
            <div><h3>About Us</h3></div>
            <div>Address</div>
            <div>Phone</div>
            <div>Email</div>
        </div>
        <div className='footer1'>
            <div><h3>Social Media</h3></div>
            <div>Instagram</div>
            <div>Facebook</div>
            <div>Twitter</div>
        </div>
        <div></div>
      </div>
      <div id='footer2'>
        <div className='footer2'>Traders</div>
        <div className='footer2'>Traders <span>©</span> 2023 All rights reserved.</div>
        <div id="icon-container" className='footer2'>
            <img id="icon" src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="instagram"></img>
            <img id="icon" src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png" alt="facebook"></img>
            <img id="icon" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter"></img>
            <img id="icon" src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="youtube"></img>
        </div>
      </div>
    </div>
  )
}
