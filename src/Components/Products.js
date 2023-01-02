import React from 'react'
import "../Style/Products.css"
import Footer from './Footer'
import Header from './Header'
import Productmain from './Productmain'

export default function Products() {
  return (
    <>
    <Header/>
    <div style={{height:'15vh'}}></div>
    <Productmain/>
    <Footer/>
    </>
  )
}
