import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'


const Winecards = ({ name, winery, price, image, id, addCart }) => {

  return (
    <Card className="cardWine" style={{ width: '18rem', height: '32rem' }}>
      <Link to={"/shop/" + id} ><Card.Img variant="top" src={image} /></Link>
      <Card.Body className="d-flex flex-column align-items-center justify-content-evenly">
        <Card.Title style={{ fontSize: "24px" }}><strong>{name}</strong></Card.Title>
        {winery.map(wine => (
          <Card.Text key={id++} className="text-center mb-0" style={{ fontSize: '12px' }}>
            {wine}
          </Card.Text>))}
        <Card.Text className="text-center mt-2" style={{ fontWeight: 'bold', fontSize: '16px' }}>
          ${price},00.-
        </Card.Text>
        
          <button type="button" class="btn btn-warning btn-lg" onClick={() => addCart(id, 1, name, price )}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill me-2" viewBox="0 0 16 16">
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"></path>
            </svg>
            <strong>Buy</strong>
          </button>
        
      </Card.Body>
    </Card>
  );
};

export default Winecards;