import React from 'react'

export default function Productmain() {
  return (
      <div id="product-page">
      <div id="product-page-left">
        <img id="product-img" src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-207526,resizemode-1,msid-76907391/wealth/invest/trading-in-stocks-is-injurious-to-your-wealth-heres-a-boring-but-better-option.jpg'></img>
      </div>
      <div id="product-page-right">
        <h2>Products</h2>
        <ul>
            <li>
                <h3 className='product-name'>Traders App</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </li>
            <li>
                <h3 className='product-name'>Traders Web</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </li>
            <li>
                <h3 className='product-name'>Traders Algo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </li>
            <li>
                <h3 className='product-name'>Traders Community</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </li>
        </ul>
      </div>
    </div>
  )
}