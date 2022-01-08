import React from 'react';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';

const EditProduct = ({ history, products, setProducts }) => {
  const { id } = useParams();
  const productToEdit = products.find((product) => product.id === id);

  const handleOnSubmit = (product) => {
    console.log(product, 'from edit product');
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts([product, ...filteredProducts]);
    history.push('/');
  };

  return (
    <div>
      <ProductForm product={productToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditProduct;