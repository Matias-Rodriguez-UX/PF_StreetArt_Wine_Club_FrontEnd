import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, removeCartQuantity, addCartQuantity } from '../../../actions';
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
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity Box</th>
            <th>Total Parcial</th>
            <th>Delete Quantity Product</th>
            <th>Add Quantity Product</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
        {cart.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt="imagen" className="mx-auto d-block" id="img-detail"/></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.cartQuantity}</td>
              <td>{product.price * product.cartQuantity}</td>
              <td><button className="btn btn-warning btn-sm" onClick={() => dispatch(removeCartQuantity(product.id))}>-</button></td>
              <td><button className="btn btn-warning btn-sm" onClick={() => dispatch(addCartQuantity(product.id))}>+</button></td>
              <td><button className="btn btn-warning btn-sm" onClick={() => dispatch(deleteFromCart(product.id))}>Delete Product</button></td>
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


