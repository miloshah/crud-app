import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({
  id,
  productname,
  author,
  price,
  quantity,
  date,
  handleRemoveProduct,
}) => {
  const history = useHistory();

  const redirectToEditPage = (e) =>{
    if(e.target.id !== 'delete'){
       history.push(`/edit/${id}`)
    }
  }

  return (
    <li className="product todo-item active flex justify-between" onClick={(e) => redirectToEditPage(e)}>
      <div className="details">
        <h3 className="product-title uppercase text-xl block font-bold text-gray-400 tracking-widest">{productname}</h3>
        <div className="product-details text-sm">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
      </div>
      <div className="button_container">
      <button 
        id="delete" 
        className="text-xs mr-3 text-red-500 focus:outline-none hover:underline" 
        onClick={() => handleRemoveProduct(id)}
      >
        Delete
      </button>
      </div>
    </li>
  );
};

export default Product;