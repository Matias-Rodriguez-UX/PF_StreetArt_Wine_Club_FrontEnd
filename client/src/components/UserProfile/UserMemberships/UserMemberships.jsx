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

  const hasMemberships = (memberships) => {
    let count = 0;
    const names = ['stencil', 'graffiti', 'mural'];
    const hasNombre = memberships.some((membership) => {
      if (names.includes(membership.name)) {
        count++;
      }
      return count === 3;
    });
    return hasNombre;
  };


  return (
    <div className="d-flex flex-column align-items-center mt-4 justify-content-evenly">
      <div className="d-flex align-items-center mt-4">
        {userActive && userActive.memberships && userActive.memberships.length > 0 ? (

          userActive.memberships.length > 1 && userActive.memberships.map((el) => {
            if (el.name !== "not member") {
              return (
                <div className="cardMember m-2">
                  <Card className="text-center" border="warning" >
                    <Card.Header>
                      <Card.Title>{el.name.toUpperCase()}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{el.description}</Card.Text>
                      <Card.Title>Price: ${el.price} </Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-muted" style={{ fontSize: '0.7rem' }}>
                      Your membership is valid from {el.User_Membership.createdAt.substring(0, 10)}. <strong>Expiration date is in a month.</strong>
                    </Card.Footer>
                  </Card>
                </div>
              )
            }
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
          </div>
        )}
      </div>
      <div className="mt-4">
        {
          hasMemberships(userActive.memberships) ?

            <Button className="btn btn-warning btn-lg" disabled={true} style={{ display: 'none' }}>
              Get a membership
            </Button>
            :
            <Link to="/memberships" >
              <Button className="btn btn-warning btn-lg" >
                Get a membership
              </Button>
            </Link>
        }

      </div>

    </div>
  );
}
