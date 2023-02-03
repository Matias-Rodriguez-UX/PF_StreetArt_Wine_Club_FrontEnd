import React from "react";


export default function Testimonial() {
    return (
        <>
            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <div className="col-lg-6 mx-auto">
                        <h3 className="text-white fs-5 mt-4 mb-2">«ArtStreet Wine Club is the most exciting thing to hit the wine world. So refreshing, so educational and fantastic at pulling down the barriers from the traditional wine world, a whole new proposal»</h3>
                        <p className="text-muted mb-2 fw-bold">Hugh Murray</p>
                        <p className="fw-light">ClassicDrink Founder</p>
                        <img src={'https://media.licdn.com/dms/image/C4E03AQHqNJ1PSqPNZA/profile-displayphoto-shrink_800_800/0/1629907804994?e=2147483647&v=beta&t=Cvcxqr4hU_qqwmc06ItJNzRcvR8iP_ndOrEfdr56Ivo'} alt="" className="rounded-circle" width={'50px'} height={'50px'} />
                    </div>
                </div>
            </div>
        </>
    )
}
