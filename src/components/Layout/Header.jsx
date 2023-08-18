import React, { useState } from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import {  productData } from "../../static/data";
import { AiOutlineSearch } from 'react-icons/ai';
const Header = () => {
    const [searchTerm,setSearchTerm]=useState("")
    const [searchData,setSearchData]=useState(null)

    const handleSearchChange=(e)=>{
        const term=e.target.value;
        setSearchTerm(term)

        const filteredProducts=productData && productData.filter((product)=>{
            product.name.toLowerCase().includes(term.toLowerCase())
        })
        setSearchData(filteredProducts)
    }
  return (
    <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
            <div>
                <Link to="/">
                    <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="" srcset="" />
                </Link>
                </div>
                {/* searchbox */}
                <div className='w-[50%] relative'>
                    <input type="text" placeholder='Search Product..' value={searchTerm} onChange={handleSearchChange}
                    className='h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md'/>
                    <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer'/>
                  
              
                </div>
               
            

        </div>
      
    </div>
  )
}

export default Header
