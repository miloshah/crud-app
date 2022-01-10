import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddProduct from '../components/AddProduct';
import ProductsList from '../components/ProductsList';
import EditProduct from '../components/EditProduct';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import SearchPage from './../components/SearchPage';

const AppRouter = () => {
  const [products, setProducts] = useLocalStorage('products', []);
  const [loading, setLoading] = useState(true); // Pre-loader before page renders
  const [queryValue, setqueryValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
        setLoading(false); 
    }, 1000);
  }, [loading]);

  const addQueryValue = (input) => {
    setqueryValue(input);
  };

  return (
    <>
      {
        loading ?
        <Loader/> :
        <BrowserRouter>
            <div className='m-auto max-w-md w-full overflow-hidden'>
              <Header />
              <SearchPage data={products} setData={setProducts} addQueryValue={addQueryValue}/>
              {
                !queryValue ?
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
                          <AddProduct {...props} products={products} setProducts={setProducts} loading={loading} setLoading={setLoading}/>
                        )}
                        path="/add"
                      />
                      <Route
                        render={(props) => (
                          <EditProduct {...props} products={products} setProducts={setProducts} loading={loading} setLoading={setLoading} />
                        )}
                        path="/edit/:id"
                      />
                      <Route component={() => <Redirect to="/" />} />
                    </Switch>
                  </div> :
                ''
              }
              
            </div>
        </BrowserRouter>
      }
    </>
   
  );
};

export default AppRouter;