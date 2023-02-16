import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import '../WineDetailCard/WineDetailCard.css';
import NavigationBar from "../../Navbar/index";
import Banner from '../../Home/Banner/index';
import Footer from '../../Footer/index'
import { Loader } from '../../Loader/index'
import Swal from 'sweetalert2';
import { getDetail, addToCart, getReviews, loadingAction, deleteReviews } from "../../../actions";
import ReviewsForm from "./Reviews/ReviewsForm";
import { useAuth0 } from "@auth0/auth0-react";
import ReviewsTemplate from "./Reviews/ReviewTemplate";
import { Button, Modal } from "react-bootstrap";
import ReviewsEdit from "./Reviews/ReviewEdit";
import { Rating } from "@mui/material";

export default function Detail(props) {
  const { isLoading, isAuthenticated: auth, user } = useAuth0();
  const [cartQuantity, setCartQuantity] = useState(1);
  const cart = useSelector(state => state.products.cart)
  const reviews = useSelector(state => state.products.reviews)
  const dispatch = useDispatch()
  const idProduct = props.match.params.id
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  useEffect(() => {
    dispatch(loadingAction(true))
    dispatch(getDetail(idProduct))
    dispatch(loadingAction(true))
    dispatch(getReviews(idProduct));
  }, [selectedReview]);
  console.log(reviews)
  const wine = useSelector((state) => state.products.wineDetail);

  const addAlert = (cartQuantity, name) => {
    Swal.fire({
      title: "YOUR PRODUCT WAS ADDED",
      text: `You add ${name} \n Quantity Box ${cartQuantity}`,
      icon: 'success',
      timer: '4000',
      timerProgressBar: true,
      allowOutsideClick: true,
      confirmButtonColor: '#ffc107'
    })
  }
  const handleClick = (id, cartQuantity, name) => {
    dispatch(addToCart(id, cartQuantity));
    addAlert(cartQuantity, name);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleClickEditReview = (item) => {
    setSelectedReview(item);
    setShowModalEdit(true);
  };
  const handleClickDeleteReview = () => {
    dispatch(deleteReviews(idProduct, selectedReview.id))
    window.location.reload();
  }
  let medRating = 0
  if (reviews.length) {
    for (const review of reviews) {
      medRating += review.rating
    }
    medRating = medRating / reviews.length
  }


  return (
    <>
      {wine.name ? (<div className="container-fluid">
        <div><Banner /></div>
        <div><NavigationBar /></div>
        <div className="row" id="detail">
          {/* <!----cardl left---> */}
          <div className="col col-6">
            <div className="img-display">
              <div className="img-showcase">
                {/* <img src={wine.image} alt="imagen" className="imgWine"/> */}
                <img src={wine.image} alt="imagen" className="mx-auto d-block" id="img-detail" />
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="d-flex align-items-center justify-content-between">
              <h1>{wine.name}</h1>
              <h2 className="me-4"><span>${wine.price}</span></h2>
            </div>
            <div className="d-flex row align-items-stretch mt-2">
              <Rating value={medRating} readOnly precision={0.1} className="col-3" /> <h6 className="col-3 text-muted mt-1">{medRating} from <a className="text-muted" style={{ textDecoration: 'none', color: '#292b2c' }} >{reviews.length} reviews</a></h6>
            </div>
            <div className="product-description">
              <ul>
                <li>Grapes: {wine.grapes.map(e => e.name + (",  "))} </li>
                <li>Winery: {wine.winery.map(e => e + (",  "))} </li>
                <li>Type: {wine.types.map(e => e.name + ("  "))}</li>
                <li>Regions: {wine.regions.map(e => e.name + (",  "))}</li>
                <li>State: {wine.states.map(e => e.name + ("  "))}</li>
                <li>Quantity: {wine.quantity}</li>
              </ul>
              <div className="input-cart">
                <label class="form-label" for="typeNumber">Number of boxes</label>
                <input type="number" id="typeNumber" class="form-control" placeholder="1" value={cartQuantity} onChange={e => setCartQuantity(e.target.value)} />
                <button type="button" id="button-cart" className="btn btn-warning btn-sm" onClick={() => handleClick(wine.id, cartQuantity, wine.name)}>Add to cart <i class="bi bi-cart-check-fill"></i></button>

              </div>
            </div>
          </div>
          <div className="col col-12" id="description">
            <h3>About this wine:</h3>
            <p>{wine.details}</p>
          </div>
        </div>
        <div className="container">
          {auth ?
            <ReviewsForm idProduct={idProduct} />
            : <h3>You must be login to make a review</h3>}
        </div>
        <div className="col col-12 p-5" id="review">
          <h3 id="reviews">REVIEWS</h3>
          <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} >
            <Modal.Header closeButton>
              <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ReviewsEdit selectedReview={selectedReview} setShowModalEdit={setShowModalEdit} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModalEdit(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showModalDelete} onHide={() => setShowModalDelete(false)} >
            <Modal.Header closeButton>
              <Modal.Title>Delete Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You really want to delete the review
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={() => setShowModalDelete(false)}>
                No
              </Button>
              <Button variant="outline-danger" type="button" onClick={(e) => handleClickDeleteReview(e)} >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {
          reviews?.map((review) => <ReviewsTemplate key={review.id} review={review} handleClickEditReview={handleClickEditReview} setShowModalDelete={setShowModalDelete} setSelectedReview={setSelectedReview} />)
        }
        <div className="col col-12">
          <Footer />
        </div>
      </div>
      ) : (
        <div className="container-fluid">
          <div><Banner /></div>
          <div><NavigationBar /></div>
          <Loader />
          <div className="col col-12">
            <Footer />
          </div>
        </div>
      )}


    </>
  )
}