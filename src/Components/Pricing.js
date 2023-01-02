import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "../Style/Pricing.css"
import Pricingmain from './Pricingmain'

export default function Pricing() {
  return (
    <div id="pricing-full">
       <Header/>
       <div></div>
       <Pricingmain/>
       <br></br>
       <Footer/>
    </div>
  )
}
