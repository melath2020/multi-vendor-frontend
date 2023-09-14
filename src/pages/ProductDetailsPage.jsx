import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from '../components/Products/ProductDetails'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { productData } from '../static/data'

const ProductDetailsPage = () => {
    const {name}=useParams()
    const [data,setData]=useState(null)
    const ProductName=name.replace(/-/g," ")
   

    useEffect(() => {
     const data=productData.find((i)=> i.name === ProductName)
     setData(data)
   
    }, [])
    
  return (
    <div>
    <Header/>
    <ProductDetails data={data}/>
    <Footer/>
    </div>
  )
}

export default ProductDetailsPage
