import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../../actions';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index';

export default function Cart(){
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, product) => acc + product.price, 0);
  
  return (
    <div className="container-fluid">
          <div><Banner /></div>
          <div><NavigationBar /></div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart?.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>price: ${product.price}</p>
            <button onClick={() => dispatch(deleteFromCart(product.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <div className="col col-12">
          <Footer />
        </div>
    </div>
  );
};


