import React from 'react'
import "../Style/Products.css"

export default function Productmain() {
  return (
      <div id="product-page">
      <div id="product-page-left">
        <img id="product-img" src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-207526,resizemode-1,msid-76907391/wealth/invest/trading-in-stocks-is-injurious-to-your-wealth-heres-a-boring-but-better-option.jpg'></img>
      </div>
      <div id="product-page-right">
        <div>
          <h1 className='product-name' style={{textDecoration:'underline solid black'}}>PRODUCTS</h1>
        </div>
        <div>
            <div>
                <h3 className='product-name'>Traders App</h3>
                <p className='product-name para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </div>
            <div>
                <h3 className='product-name'>Traders Web</h3>
                <p className='product-name para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </div>
            <div>
                <h3 className='product-name'>Traders Algo</h3>
                <p className='product-name para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </div>
            <div>
                <h3 className='product-name'>Traders Community</h3>
                <p className='product-name para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </div>
        </div>
      </div>
    </div>

  )
}
