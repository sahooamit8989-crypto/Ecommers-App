
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if(products.length>0){
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }
  }, [cartItems,products]);

  return (
    <div className="border-t pt-14 pb-20 px-4 sm:px-8">
      <div className="text-2xl mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="space-y-5">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div
              key={index}
              className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 border-b pb-4"
            >
              {/* Product Details */}
              <div className="flex items-start gap-5">
                <img
                  src={productData.image[0]}
                  className="w-20 sm:w-24 rounded-lg shadow-sm"
                  alt={productData.name}
                />
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-600">
                    <p className="font-medium">
                      {currency}
                      {productData.price}
                    </p>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded-md border">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity Input + Delete */}
              <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0">
                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className="w-14 sm:w-20 px-2 py-1 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 sm:w-6 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-transform"
                  src={assets.bin_icon}
                  alt="delete"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Total & Checkout Button */}
      <div className="my-10 flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4 sm:gap-6">
        <button
          onClick={() => navigate('/place-order')}
          className="w-full sm:w-auto bg-black text-white text-sm py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all"
        >
          PROCEED TO CHECKOUT
        </button>

        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
