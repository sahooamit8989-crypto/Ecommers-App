// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Login = ({setToken}) => {
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')
//   const onSubmitHandler=async(e)=>{
//     try{
//       e.preventDefault()
//       const response=await axios.post(backendUrl+'/api/user/admin',{email,password})
//       if(response.data.success){
//         setToken(response.data.token)

//       }else{
//         toast.error(response.data.message)
//       }

//     }catch(error){
//       console.log(error)
//       toast.error(error.message)

//     }

//   }

  
//   return (
//     <div className='min-h-screen flex items-center justify-center w-full'>
//       <div className='bg-white shodow-md rounded-lg px-8 py-6 max-w-md'>
//         <h1 className='text-2xl font-bold mb-4 ml-[50px]'>Admin Panel</h1>
//         <form onSubmit={onSubmitHandler} >
//           <div className='mb-3 min-w-72'>
//             <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
//             <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md py-2 w-full px-3 border border-gray-300 outline-none' type="email" placeholder='Your email address' required />
//           </div>
//           <div className='mb-3 min-w-72'>
//             <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
//             <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full py-2 px-3 border border-gray-300 outline-none' type="password" placeholder='Your password' required />
//           </div>
//           <button className='mt-2 cursor-pointer w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>Login</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login




import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast.success('Login successful!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3'>
            <label className='text-sm font-medium text-gray-700 mb-2 block'>Email Address</label>
            <input
              type='email'
              placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md py-2 w-full px-3 border border-gray-300 outline-none'
              required
            />
          </div>
          <div className='mb-3'>
            <label className='text-sm font-medium text-gray-700 mb-2 block'>Password</label>
            <input
              type='password'
              placeholder='Your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded-md py-2 w-full px-3 border border-gray-300 outline-none'
              required
            />
          </div>
          <button
            type='submit'
            className='mt-4 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-800 transition'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
