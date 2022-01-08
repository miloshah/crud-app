import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center'>Crud App</h1>
      <div className="flex">
        <NavLink to="/" className="block bg-opacity-30 hover:shadow-2xl hover:no-underline p-4 pr-20 border-t-2 border-r-2 border-green-500 rounded bg-gray-900 text-white w-full shadow-inner outline-none" activeClassName="active" exact>
          Products List
        </NavLink>
        <NavLink to="/add" className="block bg-opacity-30 hover:shadow-2xl hover:no-underline p-4 pr-20 border-t-2 border-r-2 border-green-500 rounded bg-gray-900 text-white w-full shadow-inner outline-none" activeClassName="active">
          Add Product
        </NavLink>
      </div>
    </header>
  );
};

export default Header;