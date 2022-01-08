import React from 'react';
import ProductForm from './ProductForm';

const AddProduct = ({ history, products, setProducts }) => {
  const handleOnSubmit = (product) => {
    setProducts([product, ...products]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ProductForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddProduct;