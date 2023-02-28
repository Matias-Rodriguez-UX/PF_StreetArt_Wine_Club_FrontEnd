import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.css'
import SpinnerCard from './SpinnerCard';

const Winecards = ({ name, winery, price, image, id, addCart, handleAgregarFavorito, userEmail, handleQuitarFavorito, favourites, stock, currentUser }) => {
  const { isLoading } = useAuth0();
  const showLoading = useSelector((state) => state.products.showLoading)
  const [favorito, setFavorito] = useState(false);
  const [maxDiscount, setmaxDiscount] = useState(0)
  const [priceDiscount, setpriceDiscoun] = useState(0)

  useEffect(() => {
    if (favourites?.length && favourites.find((e) => e.id === id)) {
      setFavorito(true);
    } else {
      setFavorito(false);
    }

    if (price > 0) {
      for (let i = 0; i < currentUser.memberships?.length; i++) {
        let objetoActual = currentUser.memberships[i];
        if (objetoActual.discount > maxDiscount) {
          setmaxDiscount(objetoActual.discount)
        }
      }
      setpriceDiscoun(Math.ceil(price * (1 - (maxDiscount / 100))))
    }

  }, [favourites, id, currentUser, priceDiscount, maxDiscount]);





  return (isLoading ? <SpinnerCard /> :
    <Card className="cardWine" style={{ width: '18rem', height: '36rem' }}>
      <div className='z-index-2'>
        {userEmail ? 
        <div className='heart ' style={{ cursor: 'pointer' }}>
          <i
            onClick={() => {
              if (favorito) {
                handleQuitarFavorito(id, userEmail);
                setFavorito(false);
              } else {
                handleAgregarFavorito(id, userEmail);
                setFavorito(true);
              }
            }}
            className={favorito ? 'bi bi-heart-fill' : 'bi bi-heart'}
          ></i>
        </div> : null}
        {maxDiscount > 0 &&
          <div>
            <Badge pill bg="warning" text="dark" className="ms-4 mt-2">
              {`${maxDiscount}% OFF`}
            </Badge>
          </div>
        }
      </div>


      <Link to={"/shop/" + id} ><Card.Img variant="top" src={image} /></Link>
      <Card.Body className="d-flex flex-column align-items-center justify-content-evenly">
        <Card.Title style={{ fontSize: "24px" }}><strong>{name}</strong></Card.Title>
        <div className='d-flex ms-2 me-2 gap-2'>
          {winery.map(wine => (
            <Card.Text className="text-center" style={{ fontSize: '12px' }}>
              {wine}
            </Card.Text>))}
        </div>
        <Card.Text className="d-flex text-center mt-2">
          {price <= priceDiscount ?
            <p className="fs-4 fw-bold">${price}</p> :
            <div className='d-flex align-items-center gap-4'><p className="text-decoration-line-through text-muted fs-6">${price}</p><p className="fs-4 fw-bold">${priceDiscount}</p></div>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex flex-column align-items-center mb-0">
        {stock < 1 ? <button type="button" className="btn btn-secondary d-flex align-items-center mt-2 mb-2" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-frown me-2" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
          </svg>
          <strong>Out of stock</strong>
        </button> :
          <button type="button" className="btn btn-warning d-flex align-items-center mt-2 mb-2" onClick={() => addCart(id, 1, name, price)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill me-2" viewBox="0 0 16 16">
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"></path>
            </svg>
            <strong>Buy</strong>
          </button>
        }
      </Card.Footer>
    </Card>
  );
};

export default Winecards;
