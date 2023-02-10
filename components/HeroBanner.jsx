import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';

function HeroBanner({heroBanner}) {
  console.log("heroBanner",heroBanner)
  return (
    <>
    <div className="hero-banner-container">
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src="" alt="headphones"  className='hero-banner-image'/>
        <div>
          <Link href='/product/ID'>
            <button  type='button'>{heroBanner.buttonText}</button>
          </Link>
        </div>
        <div className="desc">
          <h4>Description</h4>
          <p>DESCRIPTION HERE</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroBanner