

// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const PlaceOrder = () => {
//   const navigate = useNavigate();
//   const {
//     backendUrl,
//     token,
//     cartItems,
//     setCartItems,
//     getcartAmount,
//     delivery_fee,
//     products
//   } = useContext(ShopContext);

//   const [method, setMethod] = useState('cod');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: ''
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       let orderItems = [];

//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             const itemInfo = structuredClone(
//               products.find((product) => product._id === items)
//             );
//             if (itemInfo) {
//               itemInfo.size = item;
//               itemInfo.quantity = cartItems[items][item];
//               orderItems.push(itemInfo);
//             }
//           }
//         }
//       }

//       const orderData = {
//         address: formData, 
//         items: orderItems,
//         amount: getcartAmount() + delivery_fee,
//         paymentMethod: method,
//         payment: false,
//         date: Date.now()
//       };

//       switch (method) {
//         case 'cod':
//           const response = await axios.post(
//             backendUrl + '/api/order/place',
//             orderData,
//             { headers: { token } }
//           );
//           console.log(response.data)
         
//           if (response.data.success) {
//             setCartItems({});
//             navigate('/orders');
//           } else {
//             toast.error(response.data.message);
//           }
//           break;

//         default:
//           break;
//       }
//     } catch (error) {
//       console.error( error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
//     >
//       {/* Left side */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1="DELIVERY" text2="INFORMATION" />
//         </div>
//         <div className="flex gap-3">
//           <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} type="text" placeholder="First name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} type="text" placeholder="Last name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>
//         <input required onChange={onChangeHandler} name="email" value={formData.email} type="email" placeholder="Email address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         <input required onChange={onChangeHandler} name="street" value={formData.street} type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         <div className="flex gap-3">
//           <input required onChange={onChangeHandler} name="city" value={formData.city} type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input required onChange={onChangeHandler} name="state" value={formData.state} type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>
//         <div className="flex gap-3">
//           <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} type="number" placeholder="Zipcode" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input required onChange={onChangeHandler} name="country" value={formData.country} type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>
//         <input required onChange={onChangeHandler} name="phone" value={formData.phone} type="number" placeholder="Phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//       </div>

//       {/* Right side */}
//       <div className="mt-8">
//         <div className="mt-8 min-w-80">
//           <CartTotal />
//         </div>
//         <div className="mt-12">
//           <Title text1="PAYMENT" text2="METHOD" />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div onClick={() => setMethod('strip')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3 border rounded-full ${method === 'strip' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
//             </div>
//             <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
//             </div>
//             <div onClick={() => setMethod('cod')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>
//           </div>
//           <div className="w-full text-end mt-8">
//             <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;





// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const PlaceOrder = () => {
//   const navigate = useNavigate();
//   const {
//     backendUrl,
//     token,
//     cartItems,
//     setCartItems,
//     getcartAmount,
//     delivery_fee,
//     products
//   } = useContext(ShopContext);

//   const [method, setMethod] = useState('cod');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: ''
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       let orderItems = [];

//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             const itemInfo = structuredClone(
//               products.find((product) => product._id === items)
//             );
//             if (itemInfo) {
//               itemInfo.size = item;
//               itemInfo.quantity = cartItems[items][item];
//               orderItems.push(itemInfo);
//             }
//           }
//         }
//       }

//       const orderData = {
//         address: formData, 
//         items: orderItems,
//         amount: getcartAmount() + delivery_fee,
//         paymentMethod: method,
//         payment: false,
//         date: Date.now()
//       };

//       switch (method) {
//         case 'cod': {
//           const response = await axios.post(
//             backendUrl + '/api/order/place',
//             orderData,
//             { headers: { token } }
//           );
//           console.log(response.data);

//           if (response.data.success) {
//             setCartItems({});
//             navigate('/orders');
//           } else {
//             toast.error(response.data.message);
//           }
//           break;
//         }
//         case'strip':
//         const responseStripe=await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})
//         if(responseStripe.data.success){
//           const {session_url}=responseStripe.data
//           window.location.replace(session_url)
//         }else{
//           toast.error(responseStripe.data.message)
//         }
//         break;

//         default:
//           break;
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
//     >
//       {/* Left side */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1="DELIVERY" text2="INFORMATION" />
//         </div>
//         <div className="flex gap-3">
//           <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} type="text" placeholder="First name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} type="text" placeholder="Last name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>
//         <input required onChange={onChangeHandler} name="email" value={formData.email} type="email" placeholder="Email address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         <input required onChange={onChangeHandler} name="street" value={formData.street} type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         <div className="flex gap-3">
//           <input required onChange={onChangeHandler} name="city" value={formData.city} type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input required onChange={onChangeHandler} name="state" value={formData.state} type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>
//         <div className="flex gap-3">
//           <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} type="number" placeholder="Zipcode" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input required onChange={onChangeHandler} name="country" value={formData.country} type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>
//         <input required onChange={onChangeHandler} name="phone" value={formData.phone} type="number" placeholder="Phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//       </div>

//       {/* Right side */}
//       <div className="mt-8">
//         <div className="mt-8 min-w-80">
//           <CartTotal />
//         </div>
//         <div className="mt-12">
//           <Title text1="PAYMENT" text2="METHOD" />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div onClick={() => setMethod('strip')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3 border rounded-full ${method === 'strip' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
//             </div>
//             <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
//             </div>
//             <div onClick={() => setMethod('cod')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>
//           </div>
//           <div className="w-full text-end mt-8">
//             <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;





import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const {
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getcartAmount,
    delivery_fee,
    products
  } = useContext(ShopContext);
  


  const [method, setMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getcartAmount() + delivery_fee,
        paymentMethod: method,
        payment: false,
        date: Date.now()
      };

      if (method === 'cod') {
        const response = await axios.post(
          `${backendUrl}/api/order/place`,
          orderData,
          { headers: { token } }
        );

        if (response.data.success) {
          setCartItems({});
          navigate('/orders');
        } else {
          toast.error(response.data.message || 'Order failed');
        }
      } else if (method === 'strip') {
        const responseStripe = await axios.post(
          `${backendUrl}/api/order/stripe`,
          orderData,
          { headers: { token } }
        );

        if (responseStripe.data.success && responseStripe.data.session_url) {
          window.location.replace(responseStripe.data.session_url);
        } else {
          toast.error(responseStripe.data.message || 'Stripe session failed');
        }
      } else {
        toast.error('Unsupported payment method selected');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Something went wrong');
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} type="text" placeholder="First name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} type="text" placeholder="Last name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>
        <input required onChange={onChangeHandler} name="email" value={formData.email} type="email" placeholder="Email address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        <input required onChange={onChangeHandler} name="street" value={formData.street} type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="city" value={formData.city} type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input required onChange={onChangeHandler} name="state" value={formData.state} type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} type="number" placeholder="Zipcode" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input required onChange={onChangeHandler} name="country" value={formData.country} type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>
        <input required onChange={onChangeHandler} name="phone" value={formData.phone} type="number" placeholder="Phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('strip')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3 border rounded-full ${method === 'strip' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            {/* <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
            </div> */}
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
