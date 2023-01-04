import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Header.css'

export default function Header() {
  return (
    <div id="full-head">
      <div id="titile">Traders</div>
      <div id="nav-options">
      <div className="nav-options"><div><Link style={{textDecoration:'none'}} to="/"><div className="nav-options">Home</div></Link></div></div>
      <div className="nav-options"><div><Link style={{textDecoration:'none'}} to="/products"><div className="nav-options">Products</div></Link></div></div>
      <div className="nav-options"><div><Link style={{textDecoration:'none'}} to="/pricing"><div className="nav-options">Pricing</div></Link></div></div>
      <div className="nav-options"><div><Link style={{textDecoration:'none'}} to="/"><div className="nav-options">Media</div></Link></div></div>
      <div className="nav-options"><div><Link style={{textDecoration:'none'}} to="/"><div className="nav-options">Community</div></Link></div></div>
      <div className="nav-options"><div><a href='#footer-full'><div className="nav-options">Support</div></a></div></div>

      </div>
      <div id="head-but">
        <Link style={{textDecoration:'none'}} to="signupform"><button id="signup">Sign Up</button></Link>
        <Link style={{textDecoration:'none'}} to="/"><button id="login">Login</button></Link>
      </div>
    </div>
  )
}
