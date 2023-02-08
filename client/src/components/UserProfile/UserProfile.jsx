import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LoginButton from "../Login/LoginButton";

import { useEffect, useState } from "react";

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const { user, loading, getIdTokenClaims } = useAuth0();

    useEffect(() => {
        if (user && !loading) {
            getIdTokenClaims().then(({ __raw: idToken }) => {
                setUserInfo(JSON.parse(atob(idToken.split(".")[1])));
            });
        }
    }, [user, loading, getIdTokenClaims]);

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <img src={user.picture} alt="Profile" />

            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(userInfo, null, 2)}</code>
        </>
    );
};

export default Profile;
// export default function UserProfile() {
//     const { user, isAuthenticated, isLoading } = useAuth0();
//     return (
//         isAuthenticated ? (
//             <div>
//                 <Banner />
//                 <NavigationBar />
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={user.picture} alt={user.name} />
//                     <Card.Body>
//                         <Card.Title>{user.name}</Card.Title>
//                         <Card.Text>
//                             Email: {user.email}
//                         </Card.Text>
//                         <Link to='/shop'>
//                             <Button type="button" className="btn btn-warning btn-sm">Go shopping</Button>
//                         </Link>
//                     </Card.Body>
//                 </Card>
//                 <Footer />
//             </div>
//         ) : (
//             <div className="conatiner-fluid d-flex alig-items-center justify-content-center" style={{ height: '100vh', width: '100vw' }}>
//                 <div className="d-flex flex-column align-items-center justify-content-center" >
//                     <h1 className="mb-5">You must login first</h1>
//                     <LoginButton />
//                 </div>
//             </div>

//         )
//     );
// };