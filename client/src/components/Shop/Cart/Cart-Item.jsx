import React from "react";
import {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index'
import './Cart.css'

export default function Detail(props){

    const dispatch = useDispatch()

   useEffect(() => {
       dispatch(addToCart(props.match.params.id));
     }, []);

   const wine = useSelector((state) => state.cart);

     return(
       

       <>
         {wine.name ? (<div className="container-fluid">
         <div><Banner /></div>
         <div><NavigationBar /></div>
         <div className="row">
           
       </div>
       <div className="col col-12">
         <Footer />
       </div>
     </div>
           ) : ( 
     <div className="container-fluid">
     <div><Banner /></div>
     <div><NavigationBar /></div>
     <h1>LOADING....</h1>
     <div className="col col-12">
       <Footer />
     </div>
     </div>
     )}

         
</>
     )
}