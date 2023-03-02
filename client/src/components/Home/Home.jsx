import React from "react";
import Banner from './Banner'
import NavigationBar from '../Navbar/index'
import Main from './Main'
import Section1 from './Section1'
import Why from './Why'
import Testimonial from './Testimonial'
import FAQs from './FAQs'
import Team from './Team'
import Contact from "./Contact";
import Footer from '../Footer'
import RegisterModal from "./RegisterModal/RegisterModal";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "../Loader";
import { loadingAction } from "../../actions";
import { useSelector } from "react-redux";

export default function Home() {
    const { isLoading, isAuthenticated: auth } = useAuth0();
    return (
        <>{isLoading ?
            <Loader />
            : auth ?
                <>
                    <Banner></Banner>
                    <NavigationBar ></NavigationBar>
                    <Main></Main>
                    <Section1></Section1>
                    <Why></Why>
                    <Testimonial></Testimonial>
                    <FAQs></FAQs>
                    <Team></Team>
                    <Contact></Contact>
                    <Footer></Footer>
                </> : <>
                    <RegisterModal />
                    <Banner></Banner>
                    <NavigationBar></NavigationBar>
                    <Main></Main>
                    <Section1></Section1>
                    <Why></Why>
                    <Testimonial></Testimonial>
                    <FAQs></FAQs>
                    <Team></Team>
                    <Contact></Contact>
                    <Footer></Footer>
                </>}

        </>
    )
};