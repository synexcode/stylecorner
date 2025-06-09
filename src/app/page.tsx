import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import Services from '@/components/Services'
import ProductCarousel from '@/components/Products'

const page = () => {
  return (
    <div className='bg-white'>
     
      <Hero />
      <Services/>
      <ProductCarousel/>
    </div>
  )
}

export default page
