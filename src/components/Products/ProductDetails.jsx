import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const ProductDetails = ({ data }) => {
  console.log(data);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[70%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
                <img src={data.image_Url} alt="" srcset="" />
              <div className="w-full flex">
                <div
                  className={`${select === 0 ? "border" : null} cursor-pointer`}
                >
                  <img
                    src={`${data?.image_Url[0].url}`}
                    alt=""
                    className="w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
