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

   const wine = useSelector((state) => state.wineDetail);

     return(
       

       <>
         {wine.name ? (<div className="container-fluid">
         <div><Banner /></div>
         <div><NavigationBar /></div>
         <div className="row" id="detail">
           
       </div>
       <div className="col col-12 p-5" id="review">
         <h3>REVIEW</h3>
       </div>
       <div class=" d-flex mt-3 mb-4 align-items-center justify-content-center">
           <div className="img-avatar">
             <img src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1675202276/samples/people/smiling-man.jpg" className="avatar-image" alt="image" />
           </div>
           <div class="ms-3">
             <h6 class="mb-1">Jack</h6>
              <p class="mb-0">Kind Heart Charity is the most supportive organization. This is Bootstrap 5 HTML CSS template for everyone. Thank you.</p>
               <div class="d-flex mt-2">
                   <a href="#" class=" me-3">Like</a>

                   <a href="#" class="">Reply</a>
               </div>
           </div>
       </div>
       <div class=" d-flex mt-3 mb-4 align-items-center justify-content-center">
           <div className="img-avatar">
             <img src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1675202276/samples/people/smiling-man.jpg" className="avatar-image" alt="image" />
           </div>
           <div class="ms-3">
             <h6 class="mb-1">Jack</h6>
              <p class="mb-0">Kind Heart Charity is the most supportive organization. This is Bootstrap 5 HTML CSS template for everyone. Thank you.</p>
               <div class="d-flex mt-2">
                   <a href="#" class=" me-3">Like</a>

                   <a href="#" class="">Reply</a>
               </div>
           </div>
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