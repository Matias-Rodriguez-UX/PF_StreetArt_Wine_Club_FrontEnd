import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../actions/userActions";
import { Link } from "react-router-dom";
import "./UserMemberships.css";

export default function UserOrders({ setCurrentPage }) {
  setCurrentPage("memberships");
  const dispatch = useDispatch();
  const userActive = useSelector((state) => state.users.userInfo);
  const email = sessionStorage.getItem("user");
  


  return (
    <div className="boxStyle">
      {console.log(userActive.memberships)}
      {userActive && userActive.memberships && userActive.memberships.length > 0? (
        
        userActive.memberships.map((el) => {
          if (el.name === "not member") {
            return (
              <div className="text-center">
          {userActive && userActive.memberships && userActive.memberships.some((el) => el.name === "not member") ? (
            <div className="notMembership">
              You are not currently a member.
            </div>
          ) : (
            <div className="notMembership">
              You do not have current memberships yet.
            </div>
          )}
          <Link to="/memberships">
            <Button className="btn btn-warning btn-lg">
              Get a membership
            </Button>
          </Link>
        </div>
            ); // Si la membresía se llama "not member", no la renderizamos
          }
          return (  
          <div className="cardStyle"> 
            <Card className="text-center">       
              <Card.Header>
                {el.name.toUpperCase()} 
              </Card.Header>
              <Card.Body>
                <Card.Title>{el.description}</Card.Title>
                <Card.Text>Price: ${el.price} </Card.Text>
              </Card.Body>
               <Card.Footer className="text-muted">
                Your membership is valid from {el.User_Membership.createdAt.substring(0, 10)}. Expiration date is in a month.
              </Card.Footer> 
            </Card>
            </div>
          )
        })
      ) : (
        <div className="text-center">
          {userActive && userActive.memberships && userActive.memberships.some((el) => el.name === "not member") ? (
            <div className="notMembership">
              You are not currently a member.
            </div>
          ) : (
            <div className="notMembership">
              You do not have current memberships yet.
            </div>
          )}
          <Link to="/memberships">
            <Button className="btn btn-warning btn-lg">
              Get a membership
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
