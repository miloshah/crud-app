import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = (props) => {
  const [product, setProduct] = useState(() => {
    return {
      productname: props.product ? props.product.productname : '',
      tax: props.product ? props.product.tax : '',
      quantity: props.product ? props.product.quantity : '',
      price: props.product ? props.product.price : '',
      date: props.product ? props.product.date : ''
    };
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { productname, tax, price, quantity } = product;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [productname, tax, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const product = {
        id: uuidv4(),
        productname,
        tax,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(product);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setProduct((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setProduct((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:        
        setProduct((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form my-4">
      {errorMsg && <p className="errorMsg text-xs mr-3 text-red-500 mb-2">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="productname"
            value={productname}
            placeholder="Enter name of product"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="tax">
          <Form.Label>Product Tax</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="tax"
            value={tax}
            placeholder="Tax amount"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of product"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 mt-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;