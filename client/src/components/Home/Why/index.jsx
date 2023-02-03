import React from "react";

export default function Why() {
    return (
        <>
            <div className="container px-4 py-5" id="why-cards">
                <h2 className="pb-2 border-bottom">Why Join?</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card shadow">
                            <img className="bd-placeholder-img card-img-top" width={'100%'} height={'225px'} src={"https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
                            <div className="card-body">
                                <h5 className="card-title">Wines Picked by the Pros</h5>
                                <p className="card-text">Each monthly package features current favorites from all over the world in red or mixed bottles</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <img className="bd-placeholder-img card-img-top" width={'100%'} height={'225px'} src={"https://images.unsplash.com/photo-1502285254372-2cb4d1b0993b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
                            <div className="card-body">
                                <h5 className="card-title">Learn With Us</h5>
                                <p className="card-text">Monthly videos with our experts where you can participate! Ask questions while we explore together</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <img className="bd-placeholder-img card-img-top" width={'100%'} height={'225px'} src={"https://images.unsplash.com/photo-1662738221342-8106801cee08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
                            <div className="card-body">
                                <h5 className="card-title">Membership Benefits</h5>
                                <p className="card-text">Members get exclusive discounts, first dibs on products andlimited edition Wine Folly collabs</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}
