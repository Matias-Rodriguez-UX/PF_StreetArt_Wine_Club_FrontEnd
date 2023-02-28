import React, { useEffect } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../../actions/ordersAction";
// import "./UserOrder.css";
import Accordion from "react-bootstrap/Accordion";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './UserOrder.css'

export default function UserOrders() {
  const dispatch = useDispatch();
  const userOrder = useSelector((state) => state.orders.userOrder);
  const userInfo = useSelector((state) => state.users.userInfo);
  useEffect(() => {
    if (userInfo) dispatch(getUserOrders(userInfo.email));
  }, [dispatch]);

  return (
    <div className="divStyle mt-4">
      <Tabs
        defaultActiveKey="processing payment"
        id="justify-tab-example"
        className="mb-3"
        justify
        style={{ color: 'black' }}
      >
        <Tab
          eventKey="processing payment"
          title="Processing Payment"
          className="order"

        >
          {console.log(userOrder)}
          {userOrder ? (
            userOrder.map((el) =>
              el.status === "processing payment" ? (
                <Accordion defaultActiveKey="1">
                  <div className="subOrder">
                    <h5>Order number: #{el.id}</h5>
                    <h6>Total price: ${el.totalPrice}</h6>{" "}
                    <h6>Purchase Date: {el.date}</h6>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Products</Accordion.Header>
                      <Accordion.Body>
                        {el.products.map((p) => {
                          return (
                            <div className="accrdn">
                              <p className="pStyle">Name: {p.name}</p>
                              <p className="pStyle">Quantity: {p.quantity}</p>
                              <p className="pStyle">Price: ${p.price}</p>
                              <Link to={"/shop/" + p.id}> <Button variant="outline-secondary" className="btnStyle">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </Button></Link>

                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              ) : null
            )
          ) : (
            <h1>Todavía no tenes ordenes</h1>
          )}
        </Tab>
        <Tab
          eventKey="processing shipping"
          title="Processing Shipping"
          className="order"
        >
          {userOrder ? (
            userOrder.map((el) =>
              el.status === "processing shipping" ? (
                <Accordion defaultActiveKey="1">
                  <div className="subOrder">
                    {" "}
                    <h5>Order number: #{el.id}</h5>
                    <h6>Total price: ${el.totalPrice}</h6>{" "}
                    <h6>Purchase Date: {el.date}</h6>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Products</Accordion.Header>
                      <Accordion.Body>
                        {el.products.map((p) => {
                          return (
                            <div className="accrdn">
                              <p className="pStyle">Name: {p.name}</p>
                              <p className="pStyle">Quantity: {p.quantity}</p>
                              <p className="pStyle">Price: ${p.price}</p>
                              <Link to={"/shop/" + p.id}> <Button variant="outline-secondary" className="btnStyle">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </Button></Link>
                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>{" "}
                </Accordion>
              ) : null
            )
          ) : (
            <h1>Todavía no tenes ordenes</h1>
          )}
        </Tab>
        <Tab eventKey="shipped" title="Shipped Orders " className="order">
          {userOrder ? (
            userOrder.map((el) =>
              el.status === "shipped" ? (
                <Accordion defaultActiveKey="1">
                  <div className="subOrder">
                    {" "}
                    <h5>Order number: #{el.id}</h5>
                    <h6>Total price: ${el.totalPrice}</h6>{" "}
                    <h6>Purchase Date: {el.date}</h6>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Products</Accordion.Header>
                      <Accordion.Body>
                        {el.products.map((p) => {
                          return (
                            <div className="accrdn">
                              <p className="pStyle">Name: {p.name}</p>
                              <p className="pStyle">Quantity: {p.quantity}</p>
                              <p className="pStyle">Price: ${p.price}</p>
                              <Link to={"/shop/" + p.id}> <Button variant="outline-secondary" className="btnStyle">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </Button></Link>
                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              ) : null
            )
          ) : (
            <h1>Todavía no tenes ordenes</h1>
          )}
        </Tab>
        <Tab className="order" eventKey="delivered" title="Delivered Orders">
          {userOrder ? (
            userOrder.map((el) =>
              el.status === "delivered" ? (
                <Accordion defaultActiveKey="1">
                  <div className="subOrder">
                    {" "}
                    <h5>Order number: #{el.id}</h5>
                    <h6>Total price: ${el.totalPrice}</h6>{" "}
                    <h6>Purchase Date: {el.date}</h6>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Products</Accordion.Header>
                      <Accordion.Body>
                        {el.products.map((p) => {
                          return (
                            <div className="accrdn">
                              <p className="pStyle">Name: {p.name}</p>
                              <p className="pStyle">Quantity: {p.quantity}</p>
                              <p className="pStyle">Price: ${p.price}</p>
                              <Link to={"/shop/" + p.id}> <Button variant="outline-secondary" className="btnStyle">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </Button></Link>
                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              ) : null
            )
          ) : (
            <h1>Todavía no tenes ordenes</h1>
          )}
        </Tab>
        <Tab eventKey="cancelled" title="Cancelled Orders" className="order">
          {userOrder ? (
            userOrder.map((el) =>
              el.status === "cancelled" ? (
                <Accordion defaultActiveKey="0">
                  <div className="subOrder">
                    <h5>Order number: #{el.id}</h5>
                    <h6>Total price: ${el.totalPrice}</h6>{" "}
                    <h6>Purchase Date: {el.date}</h6>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Products</Accordion.Header>
                      <Accordion.Body>
                        {el.products.map((p) => {
                          return (
                            <div className="accrdn">
                              <p className="pStyle">Name: {p.name}</p>
                              <p className="pStyle">Quantity: {p.quantity}</p>
                              <p className="pStyle">Price: ${p.price}</p>
                              <Link to={"/shop/" + p.id}> <Button variant="outline-secondary" className="btnStyle">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </Button></Link>
                            </div>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              ) : null
            )
          ) : (
            <h1>Todavía no tenes ordenes</h1>
          )}
        </Tab>
      </Tabs>
    </div>
  );
}
