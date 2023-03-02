import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUserCart, getUserCart, updateUserCart } from '../../../../actions/userActions';
import { localStorageAddGet } from '../../../../actions/ordersAction';

export default function CartAlert({ setLocalStorageState, localStorageState }) {
  const [show] = useState(localStorageState);

  const cart = useSelector((state) => state.products.cart)
  const currentUser = useSelector((state) => state.users.userInfo)
  const dispatch = useDispatch()

  const handleClose = () => {
    localStorage.removeItem('cart')
    setLocalStorageState(false)
  };

  const handleShow = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderUserCart = currentUser.orders.find(el => el.status === 'cart')
    if (orderUserCart) {
      storedCart.forEach((item, index) => {
        let cartItem = cart.find(el => el.id === item.id)
        !cart.some(el => el.id === item.id) ?
          dispatch(addUserCart({
            userId: currentUser.id,
            totalPrice: item.price * item.cartQuantity,
            quantity: item.cartQuantity,
            email: currentUser.email,
            productId: item.id,
          })).then(() => {
            dispatch(getUserCart(currentUser.id))
          }) :
          dispatch(updateUserCart({
            userId: currentUser.id,
            totalPrice: item.price * item.cartQuantity,
            quantity: item.cartQuantity + cartItem.cartQuantity,
            email: currentUser.email,
            productId: item.id,
          })).then(() => {
            dispatch(getUserCart(currentUser.id))
          })
        if (index === storedCart.length - 1) dispatch(getUserCart(currentUser.id))
      })
    }
    if (!orderUserCart) {
      dispatch(localStorageAddGet(currentUser, storedCart))
    }
    localStorage.removeItem('cart')
    setLocalStorageState(false)
  };



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='d-flex justify-content-center bg-warning'>
          <Modal.Title><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center m-3'>You had products added to your cart before you logged in. Would you like to add them to your current order?</Modal.Body>
        <Modal.Footer className='d-flex justify-content-around'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleShow}>
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}