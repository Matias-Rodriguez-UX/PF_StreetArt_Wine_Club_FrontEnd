import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default function FAQs() {
    return (
        <section id='FAQs'>
            <div className="container mt-4 mb-4">
                <div className="py-5">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="mt-2 mb-4">Come Taste With Us!</h2>
                        <p className="text-muted mb-4 fw-regula"> Three tasty wine packages to choose from, delivered to your door every month. Join us as we explore the world through wine.</p>
                        <Accordion defaultActiveKey="0" className="mt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><strong>When am I billed?</strong></Accordion.Header>
                                <Accordion.Body>
                                    Your credit card will be charged around the 28th of every month, with deliveries anticipated around the third week of the following month
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><strong>When do I get my box?</strong></Accordion.Header>
                                <Accordion.Body>
                                    The first month's shipment will arrive in the second half of the month after you sign up for example. If you signed up anytime in February, your first shipment would arrive in March.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><strong>What if I don’t like the wine?</strong></Accordion.Header>
                                <Accordion.Body>
                                    If you are unhappy with your wines, reach out to us to let us know why and we’ll make it right!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><strong>Where do you ship to?</strong></Accordion.Header>
                                <Accordion.Body>
                                    Currently, we are available exclusively in Argentina Our retail partnerships to all but the following Argentina State: Tierra del Fuego.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>


            </div>
        </section>
    )
}
