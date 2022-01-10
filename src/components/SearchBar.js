import React from 'react'

const SearchBar = ({input, onChange}) => {
    
    return (
      <div className="font-sans mt-4 flex items-center justify-center">
        <div className=" border-b rounded overflow-hidden flex">
          <input type="text" className="search-input px-4 py-2 border-none bg-gray-700 bg-opacity-60 placeholder-white white" placeholder="Search..."
            value={input}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className="flex items-center justify-center px-4 bg-opacity-60 bg-gray-700">
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
          </span>
        </div>
      </div>
    );
  }

export default SearchBar  
