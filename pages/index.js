import {Product,FooterBanner,HeroBanner} from '../components'
import {client} from '../lib/client';
import React from 'react'

function Home({products, bannerData }) {
  console.log("bannerData[0]: ",bannerData[0])
  console.log("bannerData.length: ",bannerData.length)
  return (
    <>
    <HeroBanner heroBanner ={bannerData.length>0 && bannerData[0]}/> 

    <div className='products-heading'>
      <h2>Productos más Vendidos</h2>
      <p>Conoce los más vendidos de este mes!</p>
    </div>

    <div className='products-container'>
      {products.map((product)=>product.name)}
    </div>

    <FooterBanner/> 
    </>
  )
}
export const getServerSideProps =async ()=> {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);
  
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{products, bannerData }
  }
}

export default Home
