import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Banner from '../Home/Banner';
import Navbar from '../Navbar'
import Footer from '../Footer';
import PlanCard from './PlanCard';


export default function Memberships(){
  return (
    <>
        <div>
            <Banner />
            <Navbar />
            <div className="col m-0 p-0 d-flex row gap-3 align-items-center justify-content-center">
                <h5 className='fs-6 text-center mt-5'>MEMBERSHIPS</h5>
                <h1 className='fs-1 text-center'>Affordable pricing plans</h1>
                <p className='w-75 p-0 m-0 fs-6 text-center'>Explore the world of wine with the StreetArt Wine Club! We've curated a delicious selection that will get shipped to your door monthly.</p>
                <p className='w-75 p-0 m-0 fs-6 text-center'>Packages are available in 2, 4 and 6 pack 750ml mixed bottles.</p>
            </div>
            <div className='row m-0 mt-5 mb-5 p-0 gap-5 align-items-center justify-content-center'>
                <PlanCard price={'$3000'}/>
                <PlanCard price={'$5900'}/>
                <PlanCard price={'$8000'}/>
            </div>
            <Footer />
        </div>
    </>
  )
}