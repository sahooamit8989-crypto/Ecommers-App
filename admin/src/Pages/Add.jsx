// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'

// const Add = ({token}) => {
//   const [image1,setImage1]=useState(false)
//   const [image2,setImage2]=useState(false)
//   const [image3,setImage3]=useState(false)
//   const [image4,setImage4]=useState(false)

//   const [name,setName]=useState("");
//   const [description,setDescription]=useState("")
//   const [price,setPrice]=useState('');
//   const [category,setCategory]=useState('');
//   const [subcategory,setSubcategory]=useState('');
//   const [bestseller,setBestseller]=useState(false)
//   const [sizes,setSizes]=useState([])

//   const onSubmitHandler=async(e)=>{
//     e.preventDefault()
//     try{
//       const formData=new FormData()

//       formData.append('name',name);
//       formData.append('description',description)
//       formData.append('price',price)
//       formData.append('category',category)
//       formData.append('subCategory',subcategory)
//       formData.append('bestseller',bestseller)
//       formData.append('sizes',JSON.stringify(sizes))

//       image1 && formData.append("image1",image1)
//       image2 && formData.append("image2",image2)
//       image3 && formData.append("image3",image3)
//       image4 && formData.append("image4",image4)

//       const response =axios.post(backendUrl + '/api/product/add',formData,{headers:{token}})
//       console.log(response.data)

//     }catch(error){


//     }


//   }

//   return (
//     <form onSubmit={onSubmitHandler} >
//       <div className='flex flex-col w-full items-start gap-3'>
//         <p className='mb-2'>Upload Image</p>
//         <div className='flex gap-2'>
//           <label htmlFor="image1">
//             <img className='w-20' src={!image1 ? assets.upload_area:URL.createObjectURL(image1)} alt="" />
//             <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
//           </label>

//           <label htmlFor="image2">
//             <img className='w-20' src={!image2 ? assets.upload_area:URL.createObjectURL(image2)} alt="" />
//             <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
//           </label>

//           <label htmlFor="image3">
//             <img className='w-20' src={!image3 ? assets.upload_area:URL.createObjectURL(image3)} alt="" />
//             <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
//           </label>

//           <label htmlFor="image4">
//             <img className='w-20 ' src={!image4 ? assets.upload_area:URL.createObjectURL(image4)} alt="" />
//             <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
//           </label>
//         </div>
//       </div>
//       <div className='w-full'>
//         <p className='mb-2'>Product name</p>
//         <input onChange={(e)=>setName(e.target.value)} value={name} className=' w-full m-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
//       </div>

//       <div className='w-full'>
//         <p className='mb-2'>Product description</p>
//         <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className=' w-full m-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
//       </div>
//       <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//         <div>
//           <p className='mb-2'>Product category</p>
//           <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2' >
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Kids">Kids</option>
//           </select>
//         </div>

//         <div>
//           <p className='mb-2'>Sub category</p>
//           <select onChange={(e)=>setSubcategory(e.target.value)}  className='w-full px-3 py-2'>
//             <option value="Topwear">Topwear</option>
//             <option value="Buttomwear">Buttomwear</option>
//             <option value="Winterwear">Winterwear</option>
//           </select>
//         </div>

//         <div>
//           <p className='mb-2'>Product Price</p>
//           <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25'/>
//         </div>

//       </div>

//       <div>
//         <p className='mb-2'>Product sizes</p>
//         <div className='flex gap-3'>
//           <div onClick={()=>setSizes(prev=>prev.includes("S")? prev.filter(item=>item !=="S"):[...prev,"S"])}>
//             <p className={`${sizes.includes("S")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
//           </div>

//           <div onClick={()=>setSizes(prev=>prev.includes("M")? prev.filter(item=>item !=="M"):[...prev,"M"])}>
//             <p className={`${sizes.includes("M")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
//           </div>

//           <div onClick={()=>setSizes(prev=>prev.includes("L")? prev.filter(item=>item !=="L"):[...prev,"L"])}>
//             <p className={`${sizes.includes("L")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
//           </div>

//           <div onClick={()=>setSizes(prev=>prev.includes("XL")? prev.filter(item=>item !=="XL"):[...prev,"XL"])}>
//             <p className={`${sizes.includes("XL")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
//           </div>

//           <div onClick={()=>setSizes(prev=>prev.includes("XXL")? prev.filter(item=>item !=="XXL"):[...prev,"XXL"])}>
//             <p className={`${sizes.includes("XXL")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
//           </div>
//         </div>
//       </div>

//       <div className='flex gap-2 mt-2'>
//         <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} type="checkbox" id='bestseller'  />
//         <label className='cursor-pointer' htmlFor="bestseller">Add to beatseller</label>
//       </div>
//       <button className='w-28 py-3 pt-4 mt-3 bg-black text-white' type='submit'>ADD</button>
//     </form>
//   )
// }

// export default Add





import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  // Image states
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  // Product states
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men'); // default
  const [subcategory, setSubcategory] = useState('Topwear'); // default
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Toggle sizes
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !category || !subcategory) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subcategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: { token },
      });

      if(response.data.success){
        toast.success(response.data.message)
        // Reset form
      setName('');
      setDescription('');
      setPrice('');
      setImage1(false);
      setImage2(false);
      setImage3(false);
      setImage4(false); 
      }else{
        toast.error(response.data.message) 
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="p-4">
      {/* Upload Images */}
      <div className="mb-4">
        <p className="mb-2 font-medium">Upload Images</p>
        <div className="flex gap-2">
          {[{ id: 'image1', img: image1, setImg: setImage1 },
            { id: 'image2', img: image2, setImg: setImage2 },
            { id: 'image3', img: image3, setImg: setImage3 },
            { id: 'image4', img: image4, setImg: setImage4 }].map(({ id, img, setImg }) => (
            <label key={id} htmlFor={id}>
              <img
                className="w-20 h-20 object-cover border rounded"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
              <input
                type="file"
                id={id}
                hidden
                onChange={(e) => setImg(e.target.files[0])}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="mb-4">
        <p className="mb-2 font-medium">Product Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here"
          required
          className="w-full max-w-[500px] px-3 py-2 border rounded"
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <p className="mb-2 font-medium">Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write content here"
          required
          className="w-full max-w-[500px] px-3 py-2 border rounded"
        />
      </div>

      {/* Category, Subcategory, Price */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <p className="mb-2 font-medium">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="flex-1">
          <p className="mb-2 font-medium">Subcategory</p>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className="flex-1">
          <p className="mb-2 font-medium">Price</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="25"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-4">
        <p className="mb-2 font-medium">Sizes</p>
        <div className="flex gap-3">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div key={size} onClick={() => toggleSize(size)}>
              <p
                className={`${
                  sizes.includes(size) ? 'bg-pink-300' : 'bg-slate-200'
                } px-3 py-1 cursor-pointer rounded`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to Bestseller
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-28 py-2 bg-black cursor-pointer text-white rounded hover:bg-gray-800 transition"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;







