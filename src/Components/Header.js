import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Header.css'

export default function Header() {
  return (
    <div id="full-head">
      <div id="titile">Traders</div>
      <div id="nav-options">
      <div className="nav-options"><Link style={{textDecoration:'none'}} to="/"><div className="nav-options">Home</div></Link></div>
      <div className="nav-options"><Link style={{textDecoration:'none'}} to="products"><div className="nav-options">Products</div></Link></div>
      <div className="nav-options"><Link style={{textDecoration:'none'}} to="pricing"><div className="nav-options">Pricing</div></Link></div>
      <div className="nav-options">Media</div>
      <div className="nav-options">Community</div>
      <div className="nav-options">Support</div>
      </div>
      <div id="head-but">
        <button id="signup"><Link style={{textDecoration:'none'}} to="signupform">Sign Up</Link></button>
        <button id="login"><Link style={{textDecoration:'none'}} to="/">Login</Link></button>
      </div>
    </div>
  )
}
