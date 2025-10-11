// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'
// import { assets } from '../assets/assets'

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([])
//   const featchAllOrders = async () => {
//     if (!token) {
//       return null;
//     }
//     try {
//       const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
//       if (response.data.success) {
//         setOrders(response.data.orders)
//       } else {
//         toast.error(response.data.message)

//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)

//     }

//   }
//   const stausHandler=async(e,orderId)=>{
//     try{
//       const response=await axios.post(backendUrl+"/api/order/status",{orderId,status:e.target.value},{headers:{token}})
//       if(response.data.success){
//         await featchAllOrders()

//       }

//     }catch(error){
//       console.log(error)
//       toast.error(response.data.message)

//     }


//   }
//   useEffect(() => {
//     featchAllOrders()

//   }, [token])

//   return (
//     <div>
//       <h3>Order Page</h3>
//       <div>
//         {
//           orders.map((order, index) => (
//             <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs text-gray-700' key={index}>
//               <img className='w-12' src={assets.parcel_icon} alt="" />
//               <div>
//                 <div>
//                   {order.items.map((item, index) => {
//                     if (index === order.items.length - 1) {
//                       return <p className='py-0.5' key={index}> {item.name} X {item.quantity} <span>{item.size}</span></p>
//                     } else {
//                       return <p className='py-0.5' key={index}> {item.name} X {item.quantity} <span>{item.size}</span>,</p>

//                     }

//                   })}
//                 </div>
//                 <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
//                 <div>
//                   <p >{order.address.street + " , "}</p>
//                   <p className='mt-3 mb-2 font-medium' >{order.address.city + " , " + order.address.state + ' ,' + order.address.country + ' ,' + order.address.zipcode}</p>
                 
//                 </div>
//                 <p>{order.address.phone}</p>
//               </div>
//               <div>
//                 <div>
//                   <p className='text-sm sm:text-[15px]'>Items:{order.items.length}</p>
//                   <p className='mt-3'>Method:{order.paymentMethod}</p>
//                   <p>Payment:{order.payment?'':"Pending"}</p>
//                   <p>Date:{new Date(order.date).toLocaleDateString()}</p>
//                 </div>
//                 <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
//                 <select onChange={(e)=>stausHandler(e,order._id)} value={order.status} className='p-2 font-semibold'>
//                   <option value="Order Placed">Order Placed</option>
//                   <option value="Packing">Packing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Out for delivery">Out for delivery</option>
//                   <option value="Delivered">Delivered</option>

                  
//                 </select>
//               </div>

//             </div>


//           ))
//         }
//       </div>


//     </div>
//   )
// }

// export default Orders





import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // ✅ Fetch all orders
  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ✅ Handle order status update
  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Status updated ✅");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Orders Page
      </h3>

      {orders.length === 0 && (
        <p className="text-center text-gray-500">No orders found.</p>
      )}

      {orders.map((order, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 items-start border border-gray-200 rounded-lg p-5 mb-5 bg-white shadow-sm"
        >
          {/* 🖼️ Parcel icon */}
          <div className="flex justify-center md:justify-start">
            <img
              className="w-16 md:w-20"
              src={assets.parcel_icon}
              alt="parcel icon"
            />
          </div>

          {/* 🧾 Item details */}
          <div className="space-y-1">
            <div>
              {order.items.map((item, i) => (
                <p key={i} className="text-sm text-gray-700">
                  {item.name} x {item.quantity} <span>{item.size}</span>
                  {i !== order.items.length - 1 && ","}
                </p>
              ))}
            </div>

            <div className="mt-3 text-sm text-gray-600">
              <p className="font-semibold text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city},{" "}
                {order.address.state}, {order.address.country},{" "}
                {order.address.zipcode}
              </p>
              <p>{order.address.phone}</p>
            </div>
          </div>

          {/* 💳 Payment info */}
          <div className="text-sm space-y-1">
            <p>Items: {order.items.length}</p>
            <p>Method: {order.paymentMethod}</p>
            <p>
              Payment:{" "}
              <span
                className={
                  order.payment ? "text-green-600 font-medium" : "text-red-500"
                }
              >
                {order.payment ? "Done" : "Pending"}
              </span>
            </p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
          </div>

          {/* 💰 Amount */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-gray-800">
              {currency}
              {order.amount}
            </p>
          </div>

          {/* 🏷️ Status select */}
          <div>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className="p-2 border rounded-md w-full font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
