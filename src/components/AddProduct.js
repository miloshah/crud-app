import React from 'react';
import ProductForm from './ProductForm';

const AddProduct = ({ history, products, setProducts, loading, setLoading }) => {

  const handleOnSubmit = (product) => {
    setProducts([product, ...products]);
    setLoading((loading) => !loading);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ProductForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddProduct;