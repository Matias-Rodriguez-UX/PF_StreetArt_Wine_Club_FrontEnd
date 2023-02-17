import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, removeCartQuantity, addCartQuantity, addCartToLs } from '../../../actions';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index';
import "./Cart.css"
import { useAuth0 } from "@auth0/auth0-react";
import { getUserCart, getUserInfo } from "../../../actions/userActions";

export default function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const currentUser = useSelector((state) => state.users.userInfo)

  const total = cart.reduce((acc, product) => {
    return acc + product.price * product.cartQuantity;
  }, 0);

  const dispatch = useDispatch();
  
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if(cart.length === 0){
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      storedCart.forEach(item => dispatch(addCartToLs(item)));
    }
    if(isAuthenticated && cart.length === 0){
      dispatch(getUserCart(currentUser.id, currentUser.email))
    }
  }, [dispatch]);

  useEffect(() => {
    if(!isAuthenticated){
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if(!currentUser.id && isAuthenticated){
        dispatch(getUserInfo(user.email))
    }
    if(currentUser.id && isAuthenticated){
        dispatch(getUserCart(currentUser.id, currentUser.email))
    }
}, [dispatch, isAuthenticated, currentUser.id])

  return (
    <>
      <Banner />
      <NavigationBar />
      <div className="container d-flex align-items-center">
        <table className="shadow-table table align-middle table-striped m-5">
          <thead >
            <tr>
              <th className="text-center">Product</th>
              <th className="text-center">Name</th>
              <th className="text-center">Unit Price</th>
              <th className="text-center">Delete Quantity</th>
              <th className="text-center">Quantity Boxes</th>
              <th className="text-center">Add Quantity</th>
              <th className="text-center">Subtotal</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody >
            {cart.map(product => (
              <tr key={product.id} >
                <th scope="col" className="text-center">
                  <img src={product.image} className="ms-3 align-middle" alt="imagen" style={{ width: '100px', height: '100px' }} id="img-detail" />
                </th>

                <td className="text-center">{product.name}</td>
                <td className="text-center">${product.price},00-</td>
                <td className="text-center">
                  <button disabled={product.cartQuantity === 1 ? true : false} className="bg-transparent fs-5 border border-0 fw-bolder text-primary" onClick={() => dispatch(removeCartQuantity(product.id))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffbb33" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />
                  </svg>
                  </button>
                </td>
                <td className="text-center">{product.cartQuantity}</td>
                <td className="text-center">
                  <button className="bg-transparent fs-5 border fw-bolder border-0 text-primary" onClick={() => dispatch(addCartQuantity(product.id))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffbb33" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                  </svg>
                  </button>
                </td>
                <td className="text-center">${product.price * product.cartQuantity},00-</td>
                <td className="text-center"><button className="bg-transparent border border-0 fw-bolder ms-5 me-5 text-danger" onClick={() => dispatch(deleteFromCart(product.id))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container w-75 bg-wa">
        <p>
          <strong>Total: ${total},00-</strong>
        </p>
      </div>
      <div className="col col-12">
        <Footer />
      </div>
    </>
  );
};


