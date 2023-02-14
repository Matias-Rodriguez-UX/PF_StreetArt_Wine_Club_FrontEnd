import React from "react";
import {useEffect, useState} from 'react';
import {Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import '../WineDetailCard/WineDetailCard.css';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index'
import Swal from 'sweetalert2';
import { getDetail, addToCart } from "../../../actions";

export default function Detail(props){
     const [cartQuantity, setCartQuantity] = useState(1);
     const cart = useSelector(state => state.cart)
     const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
      }, []);

    const wine = useSelector((state) => state.wineDetail);
    
    const addAlert =(cartQuantity, name) =>{
      Swal.fire({
        title: "YOUR PRODUCT WAS ADDED",
        text: `You add ${name} \n Quantity Box ${cartQuantity}`,
        icon: 'success',
        timer: '4000',
        timerProgressBar: true,
        allowOutsideClick: true,
        confirmButtonColor: '#ffc107'
      })
    }
    const handleClick = (id, cartQuantity, name) => {
      dispatch(addToCart(id, cartQuantity));
      addAlert(cartQuantity, name);
    };
    
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

      return(   
        <>
          {wine.name ? (<div className="container-fluid">
          <div><Banner /></div>
          <div><NavigationBar /></div>
          <div className="row" id="detail">
            {/* <!----cardl left---> */}
            <div className="col col-6">
              <div className="img-display">
                <div className="img-showcase">
                  {/* <img src={wine.image} alt="imagen" className="imgWine"/> */}
                  <img src={wine.image} alt="imagen" className="mx-auto d-block" id="img-detail"/>
                </div>
              </div>
            </div> 
            <div className="col col-6">
            <h1>{wine.name}</h1>
            <div className="product-price">
              <h2>Price: <span>${wine.price}</span></h2>
            </div>
            <div className="product-description">
              <ul>
              <li>Grapes: {wine.grapes.map(e => e.name + (",  "))} </li>
                  <li>Winery: {wine.winery.map(e => e + (",  "))} </li>
                  <li>Type: {wine.types.map(e => e.name + ("  "))}</li>
                  <li>Regions: {wine.regions.map(e => e.name + (",  "))}</li>
                  <li>State: {wine.states.map(e => e.name + ("  "))}</li>
                  <li>Quantity: {wine.quantity}</li>
              </ul>
              <div className="input-cart">
                <label class="form-label" for="typeNumber">Number of boxes</label>
                <input type="number" id="typeNumber" class="form-control" placeholder="1" value={cartQuantity} onChange={e => setCartQuantity(e.target.value)}/> 
                <button type="button" id="button-cart" className="btn btn-warning btn-sm" onClick={() => handleClick(wine.id, cartQuantity, wine.name )}>Add to cart <i class="bi bi-cart-check-fill"></i></button>
                
              </div>
            </div>
          </div>
          <div className="col col-12" id="description">
            <h3>About this wine:</h3>
              <p>{wine.details}</p>
          </div>
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