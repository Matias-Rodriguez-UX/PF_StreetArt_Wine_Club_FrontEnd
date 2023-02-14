import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { getAllUsers, createUser, editUserInfo } from "../../actions/userActions";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LoginButton from "../Login/LoginButton";
import UserSideBar from "./UserSideBar/UserSideBar";
import UserInfo from "./UserInfo";
import UserOrders from "./UserOrders/UserOrders";
import UserMemberships from "./UserMemberships/UserMemberships";
import EditUserProfileCard from "./EditUserProfileCard/EditUserProfileCard";
import Wishlist from "./Wishlist/Wishlist";
import { Loader } from "../Loader";



export default function UserProfile() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    console.log(users)

    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [currentPage, setCurrentPage] = useState('home');

    const { isLoading, isAuthenticated: auth, user } = useAuth0();
    const emailAdmin = 'artstreetwineclub@gmail.com';
    let userDb = {};

    console.log(isAuthenticated);

    if (auth) {
        userDb = {
            email: user.email,
            name: user.name,
            picture: user.picture
        }
        console.log(userDb)
    };

    useEffect(() => {
        if (userDb.email) {
            dispatch(createUser(userDb))
        }
    }, [user, dispatch])

    useEffect(() => {
        dispatch(getAllUsers());
        setLoading(isLoading);
        setIsAuthenticated(auth);
    }, [dispatch, isLoading, auth, user]);



    if (loading) {
        return <Loader />;
    };

    return (
        isAuthenticated ? (
            <div className="row" >
                <Banner />
                <NavigationBar />
                <UserSideBar className='col-3' userName={user.name} userPicture={user.picture} setCurrentPage={setCurrentPage} />

                <div className="container col-9">
                    {currentPage === "home" && <UserInfo setCurrentPage={setCurrentPage} />}
                    {currentPage === "userinfo" && <UserInfo setCurrentPage={setCurrentPage} />}
                    {currentPage === "changeinfo" && <EditUserProfileCard setCurrentPage={setCurrentPage} />}
                    {currentPage === "orders" && <UserOrders />}
                    {currentPage === "memberships" && <UserMemberships />}
                    {currentPage === "wishlist" && <Wishlist />}
                </div>


                {user.email === emailAdmin ?
                    <div className="m-4 d-flex align-items-center">
                        <Link to='/admin' className="">
                            <Button type="button" className="btn btn-warning btn-lg">Admin profile</Button>
                        </Link>
                    </div> :
                    <div className="m-4 d-flex align-items-center">
                        <Link to='/shop'>
                            <Button type="button" className="btn btn-warning btn-lg">Go shopping</Button>
                        </Link>
                    </div>}

                <Footer />
            </div >
        ) : (
            <div className="conatiner-fluid d-flex alig-items-center justify-content-center" style={{ height: '100vh', width: '100vw' }}>
                <div className="d-flex flex-column align-items-center justify-content-center" >
                    <h1 className="mb-5">You must login first</h1>
                    <LoginButton />
                </div>
            </div>

        )
    );
};






























// import { useEffect, useState } from "react";

// const Profile = () => {
//     const [userInfo, setUserInfo] = useState(null);
//     const { user, loading, getIdTokenClaims } = useAuth0();

//     useEffect(() => {
//         if (user && !loading) {
//             getIdTokenClaims().then(({ __raw: idToken }) => {
//                 setUserInfo(JSON.parse(atob(idToken.split(".")[1])));
//             });
//         }
//     }, [user, loading, getIdTokenClaims]);

//     if (loading || !user) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <img src={user.picture} alt="Profile" />

//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//             <code>{JSON.stringify(userInfo, null, 2)}</code>
//         </>
//     );
// };

// export default Profile;



        // const axiosUserInfo = async () => {
        //     try {
        //       const accessToken = await getTokenSilently();
        //       const response = await axios.get('dev-142tko5ud5c6ozuq.us.auth0.com/userinfo', {
        //         headers: {
        //           Authorization: `Bearer ${accessToken}`
        //         }
        //       });
        //       const userInfo = response.data;
        //       console.log(userInfo)
        //       setUserInfo(userInfo);
        //     } catch (error) {
        //       console.error(error);
        //     }
                // axiosUserInfo();
        //  dispatch(createUser());
    // }, [isLoading, auth, user, getTokenSilently]);
        // };