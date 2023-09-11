import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import styles from '../../styles/styles'
import { IoBagHandleOutline } from "react-icons/io5";

const Cart = ({setOpenCart}) => {
    const cartData=[
        {
            name :"Iphone 14 Pro max ssd and 8gb ram silver color",
            description:"test",
            price :999,
        },
        {
            name :"Iphone 14 Pro max ssd and 8gb ram silver color",
            description:"test",
            price :245,
        },
        {
            name :"Iphone 14 Pro max ssd and 8gb ram silver color",
            description:"test",
            price :324,
        },
    ]
  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
         <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
            <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1 size={25} className='cursor-pointer' onClick={()=>setOpenCart(false)}/>
            </div>
            
            {/* items length */}
            <div className={`${styles.noramlFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                   items
                </h5>
              </div>

               {/* cart Single Items */}
               <br />
              <div className="w-full border-t">
                {
                cartData && cartData.map((i,index)=>(
                    <>hi</>
                ))
                }
              </div>
           


        </div>
    </div>
  )
}

export default Cart
