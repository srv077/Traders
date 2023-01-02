import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Signupform.css"

export default function SignupForm() {
    const check=()=>{

    }
  return (
    <div id="signupformfull">
      <div id="formimgdiv">
        <img id="formimg" src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/Rebrand/Hero/trading-platforms-hero-update-170521.jpg"></img>
      </div>
    <div id="signupform">
      <div>
        <div id="signupcard">
          <h1 style={{textAlign:'center',color:'aqua',fontSize:'xx-large',fontWeight:'900'}}>Traders</h1>
    
    <form onSubmit={check}>
      <label htmlFor="fname">First Name :</label>
      <input type="text"></input>
      <br></br>
      <br></br>
      <label htmlFor="sname">Last Name :</label>
      <input type="text"></input>
      <br></br>
      <br></br>
      <label htmlFor="email">Email :</label>
      <input type="email"></input>
      <br></br>
      <br></br>
      <label htmlFor="password">Password :</label>
      <input type="password"></input>
      <br></br>
      <br></br>
      <label htmlFor="cpassword">Confirm Password :</label>
      <input type="password"></input>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>

         </div>
      </div>
      <div>
        <button ><Link style={{textDecoration:'none'}} to="/">Back</Link></button>
      </div>
    </div>
    </div>
  )
}
