import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddProduct from '../components/AddProduct';
import ProductsList from '../components/ProductsList';
import EditProduct from '../components/EditProduct';
import useLocalStorage from '../hooks/useLocalStorage';


const AppRouter = () => {
  const [products, setProducts] = useLocalStorage('products', []);

  return (
    <BrowserRouter>
      <div className='m-auto max-w-md w-full overflow-hidden'>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <ProductsList {...props} products={products} setProducts={setProducts} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddProduct {...props} products={products} setProducts={setProducts} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditProduct {...props} products={products} setProducts={setProducts} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;