import React from 'react'
import "../Style/Pricing.css"


export default function Pricingmain() {
  return (
    <div>
        <br></br>
      <div id="pricing">
           <div id="pricing-1">
               <h1>Basic</h1>
               <h2>2.99$/Month</h2>
               <h3>Features:</h3>
               <ul>
                    <li>Demat Account Services</li>
                    <li>Free Equity Delivary</li>
                    <li>Community Membership</li>
               </ul>
           </div>
           <div id="pricing-1">
               <h1>Standard</h1>
               <h2>3.99$/Month</h2>
               <h3>Features:</h3>
               <ul>
                    <li>Basic Features</li>
                    <li>Thematic Investement </li>
                    <li>Daily Update</li>
               </ul>
           </div>
           <div id="pricing-1">
               <h1>Premium</h1>
               <h2>5.99$/Month</h2>
               <h3>Features:</h3>
               <ul>
                    <li>Standard Features</li>
                    <li>One to one help</li>
                    <li>Access to Study Materials</li>
               </ul>
           </div>
       </div>
       <br></br>
    </div>
  )
}
