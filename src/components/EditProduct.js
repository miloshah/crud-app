import React from 'react';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';

const EditProduct = ({ history, products, setProducts, loading, setLoading }) => {
  const { id } = useParams();
  const productToEdit = products.find((product) => product.id === id);

  const handleOnSubmit = (product) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts([product, ...filteredProducts]);
    setLoading((loading) => !loading);
    history.push('/');
  };

  return (
    <div>
      <ProductForm product={productToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditProduct;