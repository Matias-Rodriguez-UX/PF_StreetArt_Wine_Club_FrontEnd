import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'

const Winecards = ({ name, winery, price, image }) => {
  return (
    <Card className="cardWine" style={{ width: '18rem', boxShadow: ' rgba(0, 0, 0, 0.1) 0px 4px 8px', height: '32rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-evenly">
        <Card.Title style={{ fontSize: "24px" }}><strong>{name}</strong></Card.Title>
        {winery.map(wine => (
          <Card.Text className="text-center mb-0" style={{ fontSize: '12px' }}>
            {wine}
          </Card.Text>))}
        <Card.Text className="text-center mt-2" style={{ fontWeight: 'bold', fontSize: '16px' }}>
          ${price},00.-
        </Card.Text>
        <Link to="/new-route">
          <Button variant="warning"><strong>BUY</strong></Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Winecards;