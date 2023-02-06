// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFilter, getProducts, getGrepes } from "../../../actions";

// export default function Filter(){

//     const [filter, setFilter] = useState( {
//         filter: '',
//         value: ''})
    

//     const dispatch = useDispatch()
//     const allProducts = useSelector((state) => state.products)

//     function HandleFilter(e){
//         setFilter ({
//             filter: e.target.name,
//             value: e.target.value
//         })
//         dispatch(payload);
//     }
//     console.log(filter)
//       return(
       
//         <select class="form-select" aria-label="Default select example" name="Grape" id="" onChange={(e) => HandleFilter(e)}>
          
//         {allProducts.map((products) => {
//             return <option value={products.grapes.map(products => grape.name)}>{grape.name}</option>
//         })}
//         </select>
        
      
//       )
// }

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const products = useSelector(state => state.products);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <select value={filter} onChange={handleFilterChange}>
      <option value="">Todos los productos</option>
      <option value="name">Nombre</option>
      <option value="price">Precio</option>
      <option value="winery">Bodega</option>
      <option value="grapes">Uvas</option>
      <option value="states">Estados</option>
      <option value="regions">Regiones</option>
      <option value="types">Tipos</option>
    </select>
  );
};

export default Filter;
