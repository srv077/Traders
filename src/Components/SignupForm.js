import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Style/Signupform.css"

export default function SignupForm() {
    const [login,setLogin]=useState(false);
    const check=(e)=>{
       e.preventDefault();
       if(e.target[3].value!=e.target[4].value){
        alert("Confirmation password should be same as password");
       }else{
         let logininfo=[e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value];
         localStorage.setItem("Traderslogin",JSON.stringify(logininfo))
         setLogin(true);
       }
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
      <div>
      <label htmlFor="fname">First Name :</label>
      <input type="text" required></input>
      </div>
      <br></br>
      <br></br>
      <div>
      <label htmlFor="sname">Last Name :</label>
      <input type="text" required></input>
      </div>
      <br></br>
      <br></br>
      <div>
      <label htmlFor="email">Email :</label>
      <input type="email" required></input>
      </div>
      <br></br>
      <br></br>
      <div>
      <label htmlFor="password">Password :</label>
      <input type="password" required></input>
      </div>
      <br></br>
      <br></br>
      <div>
      <label htmlFor="cpassword">Confirm Password :</label>
      <input type="password" required></input>
      </div>
      <br></br>
      <br></br>
      By clicking Sign Up, you agree to our Terms & Conditions 
      <br></br>
      <br></br>
      <div id="signupformjoinbuttondiv">
      <button type="submit">Sign Up</button>
      </div>
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
