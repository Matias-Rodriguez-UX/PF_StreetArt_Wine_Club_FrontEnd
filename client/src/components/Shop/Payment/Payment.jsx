import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index';
// import useLocalStorage from  '../../../useLocalStorage';
import { backToCartOrder } from "../../../actions/ordersAction";
import { statusCart, deleteCart, createUserAddress, getUserInfo } from "../../../actions/userActions";
import "./Payment.css"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function validate(input) {
  let errors = {};
  if (!input.address){
    errors.address = 'Address is required';
  } else if(!input.reference){
    errors.reference = 'Reference is required';
  } else if (!input.state){
    errors.state = 'State is required';
  } else if (!input.region){
    errors.region = 'Region is required';
  } else if (!input.telephone){
    errors.telephone = 'Telephone is required';
  }else if (!input.zipCode){
    errors.zipCode = 'ZipCode is required';
  } 
  return errors;
  }


export default function Paypal(){
    // const { user, isAuthenticated } = useAuth0();
    // const [storedCart, setStoredCart] = useLocalStorage("cart", []);
    const cart = useSelector((state) => state.products.cart);
    const userInfo = useSelector((state) => state.users.userInfo);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
      reference: "",
      address: "", 
      zipCode: "",
      telephone: "", 
      userEmail: userInfo.email,
      state: "",
      region: "", 
    })

    const total = cart.reduce((acc, product) => {
      return acc + product.price * product.cartQuantity;
    }, 0);
    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: total,
            },
          },
        ],
      });
    }
    const onApprove = (data, actions) => {
      return actions.order.capture(handlePay(total));
    }

    function handleChange(e){
      setInput(prevState => ({
          ...prevState,
          [e.target.id] : e.target.value
       }));
      setErrors(validate({
          ...input,
          [e.target.id] : e.target.value
      }))
      setInput(prevState => {
        console.log(prevState);
        return prevState;
      });
  }
    
    function handlePay (total) {
      let addressUser = input;
      Swal.fire({
        title: `Your purchase by ${total},00 It was successful!`,
        icon: 'success',
        timer: '8000',
        timerProgressBar: true,
        allowOutsideClick: true,
        confirmButtonColor: '#ffc107'
      })
      dispatch(statusCart({
        email: userInfo.email,
        status: 'processing shipping'
      }))
      /* dispatch(deleteCart(
         userInfo.id,
      )) */
      dispatch(createUserAddress(addressUser))
    }
    useEffect(() => {
      dispatch(getUserInfo(userInfo.email))
    }, [dispatch]);

    
  
    return (
      <>
          <Banner />
          <NavigationBar />
          <div className="container d-flex flex-wrap col align-items-center gap-2 mt-4">
          <div className="container-fluid w-100 d-flex align-items-center">
          <Link to={'/cart'} className='text-decoration-none text-reset' onClick={backToCartOrder(userInfo?.orders?.find(el => el.status === "processing payment")?.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>Back to Cart</Link>
          </div>
          <div className="container d-flex align-items-center gap-5 mt-4">
          <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
          {cart.map(product => (
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{product.name}</h6>
                <small className="text-muted">Quantity Box: {product.cartQuantity}</small>
              </div>
              <span className="text-muted">${product.price},00-</span>
            </li>
           ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>${total},00</strong>
            </li>
          </ul>
    
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code"/>
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="mb-3">
                <label for="firstName">Full name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value={userInfo.fullname} readOnly />
              </div>
            </div>
    
            <div className="mb-3">
              <label for="username">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" value={userInfo.email} readOnly />
              </div>
            </div>
    
            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={input.address} onChange={(e) => handleChange(e)}/>
              {errors.address && (
                <p className="error">{errors.address}</p>
                )}
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="mb-3">
              <label for="address">Reference</label>
              <input type="text" className="form-control" id="reference" placeholder="" value={input.reference} onChange={(e) => handleChange(e)}/>
              {errors.reference && (
                <div><p className="error">{errors.reference}</p></div>
                )}
              <div className="invalid-feedback">
                Please enter your reference.
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="phone">State</label>
                <input type="text" id="state" className="form-control" placeholder="" value={input.state} onChange={(e) => handleChange(e)}/>
                {errors.state && (
                <p className="error">{errors.state}</p>
                )}
                <div className="invalid-feedback">
                  State required.
                </div>
              </div>
              <div className="col-md-5 mb-3">
                <label for="zip">Region</label>
                <input type="text" className="form-control" id="region" placeholder="" value={input.region} onChange={(e) => handleChange(e)}/>
                {errors.region && (
                <p className="error">{errors.region}</p>
                )}
              </div>
            </div>
    
            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="phone">Phone number with country code</label>
                <input type="text" id="telephone" className="form-control" placeholder="+54 999-999-999" value={input.telephone} onChange={(e) => handleChange(e)}/>
                {errors.telephone && (
                <p className="error">{errors.telephone}</p>
                )}
              </div>
              <div className="col-md-4 mb-3">
                <label for="zip">ZipCode</label>
                <input type="text" className="form-control" id="zipCode" placeholder="" value={input.zipCode} onChange={(e) => handleChange(e)}/>
                {errors.zipCode && (
                <p className="error">{errors.zipCode}</p>
                )}
              </div>
            </div>
        </form>
        </div>
          </div>
          <div className="container d-flex align-items-center"> 
            <div className="col col-12">
              <h1>${total},00.</h1>
              <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
            </div>   
          </div>
          </div>
            <Footer />
      </>
    );
  };