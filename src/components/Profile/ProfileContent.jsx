import React, { useState } from "react";
import { backend_url } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCamera,AiOutlineArrowRight,
  AiOutlineDelete, } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { MdOutlineTrackChanges} from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [zipcode, setZipcode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [avatar, setAvatar] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="w-full">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="email"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>

  
        </>


      )}

  {/* orders*/}
{
  active === 2 && (
    <div>
      <AllOrders/>
    </div>
  )
 } 

 {/* refund*/}
{
  active === 3 && (
    <div>
      <AllRefundOrders/>
    </div>
  )
 } 

 {/* Track Order*/}
{
  active === 5 && (
    <div>
      <TrackOrder/>
    </div>
  )
 } 


   {/* Change Password */}
   {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}

         {/* User Address*/}
   {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>


  );
};


 

  const AllOrders = () => {
    const orders=[
      {
        _id:"754546464664",
        orderItems:[
        {
          name:"Iphone max"
        },
      
      ],
      totalPrice:120,
      orderStatus:"Processing",
    }
    ]
    const columns = [
      { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
  
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.7,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered"
            ? "greenColor"
            : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
  
      {
        field: "total",
        headerName: "Total",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
  
      {
        field: " ",
        flex: 1,
        minWidth: 150,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/order/${params.id}`}>
                <Button>
                  <AiOutlineArrowRight size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },
    ];
  
    const row = [];
  

    orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

    
      return (
        <div className="pl-8 pt-1">
 <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
        </div>

      )
  };
  

  const AllRefundOrders = () =>{
    const orders=[
      {
        _id:"754546464664",
        orderItems:[
        {
          name:"Iphone max"
        },
      
      ],
      totalPrice:120,
      orderStatus:"Processing",
    }
    ]

    const columns = [
      { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
  
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.7,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered"
            ? "greenColor"
            : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
  
      {
        field: "total",
        headerName: "Total",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
  
      {
        field: " ",
        flex: 1,
        minWidth: 150,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/order/${params.id}`}>
                <Button>
                  <AiOutlineArrowRight size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },
    ];
    const row = [];

    orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

    return(
      <div className="pl-8 pt-1">
 <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
      </div>
    )
  }

  const TrackOrder = () =>{
    const orders=[
      {
        _id:"754546464664",
        orderItems:[
        {
          name:"Iphone max"
        },
      
      ],
      totalPrice:120,
      orderStatus:"Processing",
    }
    ]

    const columns = [
      { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
  
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.7,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered"
            ? "greenColor"
            : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
  
      {
        field: "total",
        headerName: "Total",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
  
      {
        field: " ",
        flex: 1,
        minWidth: 130,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/order/${params.id}`}>
                <Button>
                  <MdOutlineTrackChanges size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },
    ];
    const row = [];

    orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

    return(
      <div className="pl-8 pt-1">
 <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
      </div>
    )
  }

  const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const passwordChangeHandler = async (e) => {
      e.preventDefault();
  
      
    };
    return (
      <div className="w-full px-5">
        <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
          Change Password
        </h1>
        <div className="w-full">
          <form
            
            onSubmit={passwordChangeHandler}
            className="flex flex-col items-center"
          >
            <div className=" w-[100%] 800px:w-[50%] mt-5">
              <label className="block pb-2">Enter your old password</label>
              <input
                type="password"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%] mt-2">
              <label className="block pb-2">Enter your new password</label>
              <input
                type="password"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%] mt-2">
              <label className="block pb-2">Enter your confirm password</label>
              <input
                type="password"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className={`w-[95%] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

  const Address = () => {
      const [open, setOpen] = useState(false);
      const [country, setCountry] = useState("");
      const [city, setCity] = useState("");
      const [zipCode, setZipCode] = useState();
      const [address1, setAddress1] = useState("");
      const [address2, setAddress2] = useState("");
      const [addressType, setAddressType] = useState("");
      const { user } = useSelector((state) => state.user);
      const dispatch = useDispatch();
    
      const addressTypeData = [
        {
          name: "Default",
        },
        {
          name: "Home",
        },
        {
          name: "Office",
        },
      ];
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
      
      };
    
      const handleDelete = (item) => {
        const id = item._id;
       
      };
    
      return (
        <div className="w-full px-5">
          {open && (
            <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
              <div className="w-[40%] h-[80vh] bg-white rounded shadow relative overflow-y-scroll">
                <div className="w-full flex justify-end p-3">
                  <RxCross1
                    size={30}
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <h1 className="text-center text-[25px] font-Poppins">
                  Add New Address
                </h1>
                <div className="w-full">
                  <form  onSubmit={handleSubmit} className="w-full">
                    <div className="w-full block p-4">
                      <div className="w-full pb-2">
                        <label className="block pb-2">Country</label>
                        <select
                          name=""
                          id=""
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-[95%] border h-[40px] rounded-[5px]"
                        >
                          <option value="" className="block border pb-2">
                            choose your country
                          </option>
                        
                              <option
                                className="block pb-2"
                                key=""
                                value=""
                              >
                                name
                              </option>
                          
                        </select>
                      </div>
    
                      <div className="w-full pb-2">
                        <label className="block pb-2">Choose your City</label>
                        <select
                          name=""
                          id=""
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-[95%] border h-[40px] rounded-[5px]"
                        >
                          <option value="" className="block border pb-2">
                            choose your city
                          </option>
                         
                              <option
                                className="block pb-2"
                                key=""
                                value=""
                              >
                               name
                              </option>
                            
                        </select>
                      </div>
    
                      <div className="w-full pb-2">
                        <label className="block pb-2">Address 1</label>
                        <input
                          type="address"
                          className={`${styles.input}`}
                          required
                          value={address1}
                          onChange={(e) => setAddress1(e.target.value)}
                        />
                      </div>
                      <div className="w-full pb-2">
                        <label className="block pb-2">Address 2</label>
                        <input
                          type="address"
                          className={`${styles.input}`}
                          required
                          value={address2}
                          onChange={(e) => setAddress2(e.target.value)}
                        />
                      </div>
    
                      <div className="w-full pb-2">
                        <label className="block pb-2">Zip Code</label>
                        <input
                          type="number"
                          className={`${styles.input}`}
                          required
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                        />
                      </div>
    
                      <div className="w-full pb-2">
                        <label className="block pb-2">Address Type</label>
                        <select
                          name=""
                          id=""
                          value={addressType}
                          onChange={(e) => setAddressType(e.target.value)}
                          className="w-[95%] border h-[40px] rounded-[5px]"
                        >
                          <option value="" className="block border pb-2">
                            Choose your Address Type
                          </option>
                          {addressTypeData &&
                            addressTypeData.map((item) => (
                              <option
                                className="block pb-2"
                                key={item.name}
                                value={item.name}
                              >
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
    
                      <div className=" w-full pb-2">
                        <input
                          type="submit"
                          className={`${styles.input} mt-5 cursor-pointer`}
                          required
                          readOnly
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          <div className="flex w-full items-center justify-between">
            <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
              My Addresses
            </h1>
            <div
              className={`${styles.button} !rounded-md`}
              onClick={() => setOpen(true)}
            >
              <span className="text-[#fff]">Add New</span>
            </div>
          </div>
          <br />
          {user &&
            user.addresses.map((item, index) => (
              <div
                className="w-full bg-white h-min 800px:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10 mb-5"
                key={index}
              >
                <div className="flex items-center">
                  <h5 className="pl-5 font-[600]">{item.addressType}</h5>
                </div>
                <div className="pl-8 flex items-center">
                  <h6 className="text-[12px] 800px:text-[unset]">
                    {item.address1} {item.address2}
                  </h6>
                </div>
                <div className="pl-8 flex items-center">
                  <h6 className="text-[12px] 800px:text-[unset]">
                    {user && user.phoneNumber}
                  </h6>
                </div>
                <div className="min-w-[10%] flex items-center justify-between pl-8">
                  <AiOutlineDelete
                    size={25}
                    className="cursor-pointer"
                    onClick={() => handleDelete(item)}
                  />
                </div>
              </div>
            ))}
    
          {user && user.addresses.length === 0 && (
            <h5 className="text-center pt-8 text-[18px]">
              You not have any saved address!
            </h5>
          )}
        </div>
    );
  };

export default ProfileContent;


