import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../../actions/ordersAction";
import './UserOrder.css'

export default function UserOrders() {
  const dispatch = useDispatch();
  const userOrder = useSelector((state) => state.orders.userOrder);
  const userInfo = useSelector((state) => state.users.userInfo);
  useEffect(() => {
    if (userInfo) dispatch(getUserOrders(userInfo.email));
  }, [dispatch]);
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="processing payment" title="Processing Payment" className="order">
        {console.log(userOrder)}
        {userOrder ? (
          userOrder.map((el) =>
            el.status === "processing payment" ? (<div className='subOrder'> <h4>Order number: #{el.id}</h4> <h4>Total price: ${el.totalPrice}</h4> <h4>Purchase Date: {el.date}</h4></div>
            ) : null
          )
        ) : (
          <h1>Todavía no tenes ordenes</h1>
        )}
      </Tab>
      <Tab eventKey="processing shipping" title="Processing Shipping" className="order">
        {userOrder ? (
          userOrder.map((el) =>
            el.status === "processing shipping" ?(<div className='subOrder'> <h4>Order number: #{el.id}</h4> <h4>Total price: ${el.totalPrice}</h4> <h4>Purchase Date: {el.date}</h4></div>): null
          )
        ) : (
          <h1>Todavía no tenes ordenes</h1>
        )}
      </Tab>
      <Tab eventKey="shipped" title="Order Shipped" className="order">
        {userOrder ? (
          userOrder.map((el) =>
            el.status === "shipped" ? (<div className='subOrder'> <h4>Order number: #{el.id}</h4> <h4>Total price: ${el.totalPrice}</h4> <h4>Purchase Date: {el.date}</h4></div>
            ) : null
          )
        ) : (
          <h1>Todavía no tenes ordenes</h1>
        )}
      </Tab>
      <Tab  className="order" eventKey="delivered" title="Order Delivered">
        {userOrder ? (
          userOrder.map((el) =>
            el.status === "delivered" ? (<div className='subOrder'> <h4>Order number: #{el.id}</h4> <h4>Total price: ${el.totalPrice}</h4> <h4>Purchase Date: {el.date}</h4></div>
            ) : null
          )
        ) : (
          <h1>Todavía no tenes ordenes</h1>
        )}
      </Tab>
      <Tab eventKey="cancelled" title="Order Cancelled" className="order">
        {userOrder ? (
          userOrder.map((el) =>
            el.status === "cancelled" ? (<div className='subOrder'><h4>Order number: #{el.id}</h4> <h4>Total price: ${el.totalPrice}</h4> <h4>Purchase Date: {el.date}</h4></div>
            ) : null
          )
        ) : (
          <h1>Todavía no tenes ordenes</h1>
        )}
      </Tab>
    </Tabs>
  );
}
