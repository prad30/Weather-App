import React, { useState } from 'react';
import SearchIcon from '../assets/search-icon.png';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState();

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-Container">
      <input value={city} type="text" className="input-city" placeholder="Enter City" onChange={(input)=>setCity(input.target.value)}/>
      <img className="search-btn" src={SearchIcon} alt="search" onClick={handleSearch}/>
    </div>
  );
};

export default SearchBar;
