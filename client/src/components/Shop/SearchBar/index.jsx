
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./searchBar.css"

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("")
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products)

    useEffect(() => {
        if(searchInput === "" && results.length > 0) return setResults([])
      setResults(allProducts.filter(el => el.name.includes(nameConverter(searchInput))));
    }, [searchInput])

    const nameConverter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };
  

    const handleChange = (e) => {
        setSearchInput(e.target.value)
        console.log(searchInput)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        // dispatch((allProducts.filter(el => el.name === searchInput)));
        setSearchInput("");
    }
   
  return (
    <div>
      <form className='w-100 bg-dark p-2 d-flex align-items-center justify-content-center' onSubmit={e => handleSearchSubmit(e)}>
        <div className='d-flex align-items-center justify-content-center autocomplete-cont w-100 '>
        <input
            className='w-25 ps-3 pt-1 pb-1'
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            value={searchInput} 
        />
        {showResults && results.length > 0 && <ul className='option-list w-25 position-absolute'>{results.map(el => <li key={el.id} className=' w-100 p-1 bg-light' onClick={() => setSearchInput(el.name)}>{el.name}</li>)}</ul>}
        </div>
        <button type="submit" className='btn btn-warning btn-md rounded-0'>Search</button>
      </form>
    </div>
  )
}
