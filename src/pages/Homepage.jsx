import React from 'react'
import MainCarousal from '../components/MainCarousal'
import ProductCard from '../components/ProductCard'

const Homepage=()=>{
    return(<>
       <MainCarousal/>
       <div className='container m-auto'>
       <h1 className='text-2xl font-bold text-center mb-3'>New Arrivals</h1>
       <div className='grid grid-cols-4 gap-4'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
       </div>
</>
    )
}
export default Homepage