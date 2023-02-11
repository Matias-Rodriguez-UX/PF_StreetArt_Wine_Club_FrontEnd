import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../../actions';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index';

export default function Cart(){
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, product) => {
    return acc + product.price * product.cartQuantity;
  }, 0);
  
  return (
    <div className="container-fluid">
          <div><Banner /></div>
          <div><NavigationBar /></div>
          <h2>Carrito de compras</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
        {cart.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.cartQuantity}</td>
              <td>{product.price * product.cartQuantity}</td>
              <td><button onClick={() => dispatch(deleteFromCart(product.id))}>
              Delete
            </button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Total: <strong>{total}</strong>
      </p>
            
      <div className="col col-12">
          <Footer />
        </div>
    </div>
  );
};


