import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../../actions/userActions';
import { Link } from 'react-router-dom';
import "./UserMemberships.css"

export default function UserOrders (){

    const dispatch = useDispatch()
    const userActive = useSelector(state => state.users.userInfo)
    const email = sessionStorage.getItem('user');

    // useEffect (()=> {
    //     if(userActive){
    //        dispatch(getUserInfo(email))  
    //     }
    //     getUserMembership()
    // },[dispatch]) 
console.log(userActive)
    return (<div className='box'>
        {userActive.membership?(
        <Card className="text-center">
          <Card.Header>{userActive.fullname}</Card.Header>
          <Card.Body>
            <Card.Title>{userActive.membership.name.toUpperCase()}</Card.Title>
            <Card.Text>
            {userActive.membership.description}
            </Card.Text>
            <Link to='/memberships'>  
            <Button className="btn btn-warning btn-lg">Select membership</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">{userActive.email}, your membership is valid from {userActive.membership.purchaseDate}</Card.Footer>
        </Card>): <div className="text-center">
            <div className='notMembership'> You do not have current memberships yet </div>
            <Link to='/memberships'>  
            <Button className="btn btn-warning btn-lg">Select membership</Button>
            </Link>
      
            </div>
        
        }
        </div>
      );
};