import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index';
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const strpePromise = loadStripe("pk_test_51McD7oJhNhdjenYXEpnTMVBlf9blRUpRus2x9J8A0Xxt8i0M5N3cdP9KxyIwEOPW9UU2CZmCxJ2snT5OJB4JY5wQ005l2fCk4P")

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    }

    return (
        <form onSubmit={handleSubmit} className="row g-3">
            <div class="col-12">
                <CardElement/>
            </div>
            <div class="col-12">
                <button>BUY</button>
            </div>
        </form>
    )
}







export default function Payment(){
    const cart = useSelector((state) => state.cart);
    const total = cart.reduce((acc, product) => {
        return acc + product.price * product.cartQuantity;
      }, 0);
    return (
        <>
        <Banner />
        <NavigationBar />
        <h1>MAKE A PAYMENT</h1>
        <Elements stripe={strpePromise}>
            <CheckoutForm />
        </Elements>
        <div className="row"> 
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
              <strong>${total}</strong>
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
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
    
            <div className="mb-3">
              <label for="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
    
            <div className="mb-3">
              <label for="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
    
            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
    
            <div className="mb-3">
              <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>
    
            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address"/>
              <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info"/>
              <label className="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr className="mb-4"/>
    
            <h4 className="mb-3">Payment</h4>
    
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" for="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" for="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" for="paypal">PayPal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
        </div>
      </div>
        <Link to={"/cart"}><button type="button" className="btn btn-warning btn-lg">Back to Cart</button></Link>
        <Link to={"/paypal"}><button type="button" className="btn btn-warning btn-lg">paypal</button></Link>
        <div className="col col-12">
          <Footer />
        </div>
        </>
    );
};