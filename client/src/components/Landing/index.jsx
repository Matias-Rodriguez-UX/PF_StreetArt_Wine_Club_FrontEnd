import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button} from 'react-bootstrap';


export default function Landing() {

        const handleClick = () => {
          window.location.href = 'https://www.google.com';
        };

    return (
      <Container fluid>
        <Row>
          <Col md={6} className="text-center">
            <p>We sell products with alcohol on this webpage, how old are you?</p>
            <Link to='/home'>
                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Older than 18</button>
            </Link>
            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2" onClick={handleClick}>Younger than 18</button>
          </Col>
          <Col md={6} className="text-center">
          <video autoPlay loop muted>
               <source src="https://res.cloudinary.com/dom9fvn1q/video/upload/v1675443590/Videos/production_ID_4255507_xbabos.mp4" type="video/mp4" />
         </video>
          </Col>
        </Row>
      </Container>
    );
  };


