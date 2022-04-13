import React from 'react';
import './Card.css';

function Card() {
  
  return (
    <div className='container'>
      <div className='wrapper'>
        <h1 className='title'>Our Pricing </h1>
        <div className='pricing'>
          <p> Annually </p>
          <label className='turnON'>
            <input type="checkbox" name="" id="toggle" />
              <span className='slider'></span>
          </label>
          <p>Monthly</p>

        </div>
        <div className="pricing-main">
        <div className="pricing-box">
          <p className="box-title">Basic</p>
          <p className="price-annually"> &dollar; <span className="price">199.99</span></p>
          <p className="price-monthly"> &dollar; <span className="price">19.99</span></p>
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <a href="/">Learn More</a>
        </div>
        <div className="pricing-box featured">
          <p className="box-title">Professional</p>
          <p className="price-annually"> &dollar; <span className="price">249.99</span></p>
          <p className="price-monthly"> &dollar; <span className="price">24.99</span></p>
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <a href="/">Learn More</a>
        </div>
        <div className="pricing-box">
          <p className="box-title">Master</p>
          <p className="price-annually"> $ <span className="price">399.99</span></p>
          <p className="price-monthly"> $ <span className="price">39.99</span></p>
          <ul>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>
          <a href="/">Learn More</a>
        </div>
      </div>


      </div>  
    </div>
  )
}

export default Card