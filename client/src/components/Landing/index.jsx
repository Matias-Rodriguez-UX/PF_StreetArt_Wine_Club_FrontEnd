import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AgeForm from './AgeForm'


export default function Landing() {

  const handleClick = () => {
    window.location.href = 'https://ciudadesamigas.org/no-te-consumas-alcohol/';
  };

  return (
    <Container fluid>
      <div style={{ height: '100vh' }}>
        <Row className="d-flex align-items-center" style={{ height: '100vh' }}>
          <Col md={8} className="text-center">
            <img className="mb-2" src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1677697005/products/pkkcqvdzzhu5graylrzw.png" alt="" style={{ width: '50%' }} />
            <h1>Welcome!</h1>
            <p>We sell products with alcohol on this webpage, how old are you?</p>
            <AgeForm />
          </Col>
          <Col className="text-center" >
            <video autoPlay loop muted className="object-fit-cover float-end" style={{ height: '99vh' }}>
              <source src="https://res.cloudinary.com/dom9fvn1q/video/upload/v1675443590/Videos/production_ID_4255507_xbabos.mp4" type="video/mp4" />
            </video>
          </Col>
        </Row>
      </div>
    </Container>
  );
};


