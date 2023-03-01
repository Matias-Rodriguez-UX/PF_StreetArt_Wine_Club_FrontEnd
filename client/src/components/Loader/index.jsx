import React from 'react'
import './Loader.css'

export const Loader = () => {
    return (
        <div className='loaderBody mt-5'>
            <div style={{ height: '150px' }}></div>
            <div className="wrapper mt-5">
                <div className="loader">
                </div>
            </div>
        </div>

    )
}