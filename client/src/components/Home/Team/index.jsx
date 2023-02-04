import React from "react";


export default function Team() {
    return (
        <section id='about'>
            <div className="bg-dark text-secondary px-4 py-5 text-center mb-4">
                <div>
                    <h2 className="display-5 fw-bold text-white">Our Team</h2>
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <img
                                className="rounded-circle"
                                width={'150px'}
                                height={'150px'}
                                src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="" />
                            <h3 className="mt-4">John Carter</h3>
                            <h5 className="fw-normal mt-4">John Carter is the cofounder ArtStreet Wines. Since its creation in 2011, ArtStreet Wines has become one of the most popular wine education sites in the world due to its extensive use of insightful articles, detailed infographics, and entertaining videos.
                            </h5>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <img
                                className="rounded-circle"
                                width={'150px'}
                                height={'150px'}
                                src={"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="" />
                            <h3 className="mt-4">Matt Cannon</h3>
                            <h5 className="fw-normal mt-4">Our Director of Education, Matt Cannon, is one of only 32 Bollinger award-winning Masters of Wine. Before joining us, he has worked at the WSET School London where he helped develop materials for the WSET Diploma and taught all WSET levels.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
