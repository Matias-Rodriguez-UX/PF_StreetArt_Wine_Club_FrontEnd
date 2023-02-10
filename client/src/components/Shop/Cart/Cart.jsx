import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../../actions'

export default function Cart(){
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  console.log(cart);
  return (
    <div>
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
    </div>
  );
};


