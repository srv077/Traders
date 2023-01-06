import React, { useEffect } from 'react'
import "../Style/Products.css"
import Footer from './Footer'
import Header from './Header'
import Productmain from './Productmain'

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Header/>
    <div id="forheaderleft" ></div>
    <Productmain/>
    <Footer/>
    </>
  )
}
