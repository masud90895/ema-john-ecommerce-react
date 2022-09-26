import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import Product from '../Product/Product';

const Drower = ({productItem,setProductItem}) => {
  let quantity =0;
  let shipping= 0;
  let totalPrice = 0;
  
  for (const product of productItem) {
    totalPrice = (product.price * product.quantity) + totalPrice ;
    quantity = quantity + product.quantity;
    shipping =( product.shipping + shipping);
  } 
  
  const taxPrice = (totalPrice * 0.1).toFixed(2);
  
  const getItemPrice = shipping + totalPrice + parseFloat(taxPrice)
  const clearButton =()=> {
    setProductItem([]);
    deleteShoppingCart()
  };
 
    return (
        <div className='grid-cols-4 lg:px-5 md:relative md:w-[100%] lg:w-[30%]'>
        <div >
          <ul className="menu p-4 overflow-y-auto text-left  w-full md:w-80  bg-[#ffa72490] text-base-content h-[100vh] md:fixed">
          <div>
          <h1 className='text-4xl font-bold my-10 text-center'>Oder summery</h1>
          </div>
            <div >
            <h3 className='mb-2'>Selected Items: <span>{quantity}</span></h3>
            <h3 className='mb-2'>Total Price: $<span>{totalPrice}</span></h3>
            <h3 className='mb-2'>Total Shipping: $<span>{shipping}</span></h3>
            <h3 className='mb-2'>Tax: $<span>{taxPrice}</span></h3>
            <h3 className='mb-10 text-xl font-bold'>Grand Total: $<span>{getItemPrice}</span></h3>  
           </div>  
           <button onClick={clearButton}  className="btn btn-outline btn-secondary mb-4">Clear button <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
      </button>
           <button className='btn btn-outline btn-primary'>Review Order <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
      </button>
          </ul>
        </div>
      </div>
    );
};

export default Drower;