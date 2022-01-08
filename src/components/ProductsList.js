import React from 'react';
import _ from 'lodash';
import Product from './Product';

const ProductsList = ({ products, setProducts }   ) => {

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <React.Fragment>
      <ul className="product-list m-0 my-4 p-0 list-none w-full">
        {!_.isEmpty(products) ? (
          products.map((product) => (
            <Product key={product.id} {...product} handleRemoveProduct={handleRemoveProduct} />
          ))
        ) : (
          <p className="message text-center inline-block w-full p-4 text-gray-600 text-xs">No products available. Please add some products.</p>
        )}
      </ul>
    </React.Fragment>
  );
};

export default ProductsList;