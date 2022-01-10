import React, { useState } from 'react'
import ProductsList from './ProductsList';
import SearchBar from './SearchBar';

function SearchPage(props) {
    const [input, setInput] = useState('');
    const [dataList, setdataList] = useState([]);

    const updateInput = (inputValue) => {
        setInput(inputValue);
        const filteredData =getFilteredData(props.data, inputValue);
        setdataList(filteredData);
        props.addQueryValue(inputValue);
    }

    const getFilteredData = (dataSet, searchValue) => {
        return dataSet.filter(item => {
        return item.productname.toLowerCase().includes(searchValue.toLowerCase())
        });
    }

    return (
        <div>
            <SearchBar 
                input={input} 
                onChange={updateInput}
            />
            {
                input ? 
                 <ProductsList {...props} products={dataList} setProducts={props.setProducts} /> :
                 ''
            }
           
        </div>
        
    )
}

export default SearchPage
