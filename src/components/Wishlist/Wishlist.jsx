import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 Pro max ssd and 8gb ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro max ssd and 8gb ram silver color",
      description: "test",
      price: 245,
    },
    {
      name: "Iphone 14 Pro max ssd and 8gb ram silver color",
      description: "test",
      price: 324,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishlist(false)}
          />
        </div>

        {/* items length */}
        <div className={`${styles.noramlFlex} p-4`}>
          <AiOutlineHeart size={25} />
          <h5 className="pl-2 text-[20px] font-[500]">items</h5>
        </div>

        {/* cart Single Items */}
        <br />
        <div className="w-full border-t">
          {cartData &&
            cartData.map((i, index) => <CartSingle key={index} data={i} />)}
        </div>
        
      </div>
      

      

    </div>

    
  );
};

const CartSingle = ({data}) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
      <RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2" 
        />
         <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
         <RxCross1 className="cursor-pointer" />

        
       
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
        
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US{totalPrice}
          </h4>
        </div>

        <div>
          <BsCartPlus size={20} className="cursor-pointer" tile="Add to cart"
           
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;




