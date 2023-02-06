import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserProfile () {
     const { user, isAuthenticated, isLoading } = useAuth0();
    return(
        isAuthenticated && (
        <div>
         <Banner/>
         <NavigationBar/>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user.picture} alt={user.name} />
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                Email: {user.email}
                                </Card.Text>
                                <Link to ='/shop'>
                                    <Button type="button" className="btn btn-warning btn-sm">Go shopping</Button>
                                </Link>
                        </Card.Body>
                    </Card>
         <Footer/>
        </div>
        )
    );
};