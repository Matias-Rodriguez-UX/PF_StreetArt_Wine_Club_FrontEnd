import React from "react";
import Banner from '../Banner'
import NavBar from '../Navbar'
import Main from './Main'
import Section1 from './Section1'
import Why from './Why'
import Testimonial from './Testimonial'
import FAQs from './FAQs'
import Team from './Team'
import Contact from "./Contact";
import Footer from '../Footer'

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <NavBar></NavBar>
            <Main></Main>
            <Section1></Section1>
            <Why></Why>
            <Testimonial></Testimonial>
            <FAQs></FAQs>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}