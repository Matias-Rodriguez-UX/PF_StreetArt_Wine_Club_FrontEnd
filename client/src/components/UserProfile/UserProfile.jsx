import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from 'react-redux';
import { createUser, editUserInfo, postUserInfo } from "../../actions/userActions";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LoginButton from "../Login/LoginButton";
import UserSideBar from "./UserSideBar/UserSideBar";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import { Loader } from "../Loader";
var axios = require("axios").default;




export default function UserProfile() {
    const dispatch = useDispatch();
    const users = useSelector ((state) => state.users );
    const info = useSelector((state) => state.userInfo)
    
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { isLoading, isAuthenticated: auth, user, getIdTokenClaims } = useAuth0();
   /*  const [userInfo, setUserInfo] = useState({
        token: "",
        email: "",
        role: "",
        fullname: ""
    }) */
    const emailAdmin = 'artstreetwineclub@gmail.com'

    
     /* const handleTokenRetrieval = async () => {
        
            
        
        const tokenClaims = await getIdTokenClaims();

        const idToken = tokenClaims.__raw;
        const email = tokenClaims.email;
        const fullname = tokenClaims.name;
        const role = tokenClaims.AssigRoles[0] || "common"
       
        
        console.log(idToken, email, fullname, role)
        setUserInfo({
            token: idToken,
            email: email,
            role: role,
            fullname: fullname
        })

        dispatch( postUserInfo(userInfo))
        console.log("SOY EL ESTADO ", userInfo)
        
     };
 */
    


    useEffect(()  => {
        setLoading(isLoading);
        setIsAuthenticated(auth);
         /* if(isAuthenticated === true){
            setTimeout(() => {
                handleTokenRetrieval()
            }, 60000);
        }  */
    }, [isLoading, auth]);
    console.log("SOY EL USER", user); 

    const handleInfo = async () => {
if(user)
   { const dbUser = {
        email: user.email,
        token: 'soyeltoken',
        role: user.AssigRoles[0],
        fullname: user.name,
      };

      console.log(dbUser)
      return dispatch(postUserInfo(dbUser)).then(()  =>  console.log(dbUser))}
    }

    useEffect(()  => {
       
        handleInfo()
    },[user])
    if (loading) {
        return <Loader />;
    }

    return (
        isAuthenticated ? (
            <div className="row" >
                
                {/* <button onClick={handleRoleVerification}>Verificar Rol</button> */}
                <Banner />
                <NavigationBar />
                <UserSideBar className='col-3' userName={user.name} userPicture={user.picture} />
                <UserProfileCard className='col-3' userName={user.name} userPicture={user.picture} userEmail={user.email}/>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>

                        {user.email === emailAdmin ?
                            <Link to='/admin'>
                                <Button type="button" className="btn btn-warning btn-sm">Admin profile</Button>
                            </Link> : <Link to='/shop'>
                                <Button type="button" className="btn btn-warning btn-sm">Go shopping</Button>
                            </Link>}
                    </Card.Body>
                </Card>
                <Footer />
                
            </div >
        ) : (
            <div className="conatiner-fluid d-flex alig-items-center justify-content-center" style={{ height: '100vh', width: '100vw' }}>
                <div className="d-flex flex-column align-items-center justify-content-center" >
                    <h1 className="mb-5">You must login first</h1>
                    <LoginButton/>
                </div>
            </div>

        )
    );
};






