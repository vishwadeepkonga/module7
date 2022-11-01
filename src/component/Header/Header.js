import React, { Component } from 'react'
import Image from '../../Assets/image.png'

import './Header.css'

function Header(){
    return(
        <div className="banner">
        <div className="banner-left">
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <h4>We know how large objects will act, but things on a small scale</h4>
          <button type="button">SHOP NOW</button>
        </div>
        <div className="banner-right">
          <img src={Image} alt=""  className="banner-image"/>
        </div>
      </div>
      )
}
export default Header