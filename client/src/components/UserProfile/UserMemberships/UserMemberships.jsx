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

  const membershipName = userActive.memberships.map((el) => el.name);
  const membershipDetail = userActive.memberships.map((el) => el.description);
  const membershipPrice = userActive.memberships.map((el) => el.price);
  console.log(membershipName, membershipDetail, membershipPrice);

  // useEffect (()=> {
  //     if(userActive){
  //        dispatch(getUserInfo(email))
  //     }
  //     getUserMembership()
  // },[dispatch])
  //console.log(userActive);
  return (
    <div className="boxStyle">
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
             {/*  <Card.Footer className="text-muted">
                {userActive.email}, your membership is valid from{" "}
                {userActive.memberships}
              </Card.Footer> */}
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
