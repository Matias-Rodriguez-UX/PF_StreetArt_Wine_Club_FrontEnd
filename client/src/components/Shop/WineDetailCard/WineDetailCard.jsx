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
import { addUserCart, getUserCart, getUserInfo, updateUserCart } from "../../../actions/userActions";
import { Badge, Button, Modal } from "react-bootstrap";
import ReviewsEdit from "./Reviews/ReviewEdit";
import { Rating } from "@mui/material";
import LoginButton from "../../Login/LoginButton";
import IconButtonWish from "./Wish/Wishbutton";
import FavoriteIcon from '@mui/icons-material/Favorite'
import { deleteFavourite, getUserWishlist, postFavourite } from "../../../actions/userActions";
import { getMemberships } from "../../../actions/membershipsActions";

export default function Detail(props) {
  const { isLoading, user, isAuthenticated } = useAuth0();
  const [cartQuantity, setCartQuantity] = useState(1);
  const [getSwitch, setGetSwitch] = useState(false)
  const favourites = useSelector((state) => state.users.userWishlist);
  const cart = useSelector(state => state.products.cart)
  const reviews = useSelector(state => state.products.reviews)
  const dispatch = useDispatch()
  const idProduct = props.match.params.id
  const [allReviews, setAllReviews] = useState([])
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});
  const [userIf, setUserIf] = useState({});
  const currentUser = useSelector((state) => state.users.userInfo)
  const allMemberships = useSelector((state) => state.memberships.allMemberships)
  const wine = useSelector((state) => state.products.wineDetail);
  const [maxDiscount, setmaxDiscount] = useState(0)
  const [priceDiscount, setpriceDiscoun] = useState(0)



  useEffect(() => {
    dispatch(loadingAction(true))
    dispatch(getDetail(idProduct))
    dispatch(loadingAction(true))
    dispatch(getReviews(idProduct))
    if (reviews.length) { setAllReviews(reviews) }
    if (!currentUser.id && isAuthenticated) {
      dispatch(getUserInfo(user.email))
    }
    dispatch(getMemberships())

    if (wine.price > 0) {
      for (let i = 0; i < currentUser.memberships?.length; i++) {
        let objetoActual = currentUser.memberships[i];
        if (objetoActual.discount > maxDiscount) {
          setmaxDiscount(objetoActual.discount)
        }
      }
      setpriceDiscoun(Math.ceil(wine.price * (1 - (maxDiscount / 100))))
    }
  }, [dispatch, isAuthenticated, currentUser.id, selectedReview, allReviews, userIf, maxDiscount, priceDiscount, wine.price]);

  useEffect(() => {
    if (getSwitch)
      dispatch(getUserCart(currentUser.id))
    return setGetSwitch(false)
  }, [dispatch])



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

  const handleClick = (id, cartQuantity, name, price) => {
    if (!isAuthenticated) {
      dispatch(addToCart(id, cartQuantity));
      addAlert(cartQuantity, name);
    }
    if (isAuthenticated) {
      if (cart.some(el => el.id === id)) {
        let updateWine = cart.find(el => el.id === id)
        dispatch(updateUserCart({
          userId: currentUser.id,
          totalPrice: price,
          quantity: updateWine.cartQuantity + parseInt(cartQuantity),
          email: user.email,
          productId: id,
        }))
        setGetSwitch(true)
        return addAlert(cartQuantity, name);
      }
      dispatch(addUserCart({
        userId: currentUser.id,
        totalPrice: price,
        quantity: cartQuantity,
        email: user.email,
        productId: id,
      })).then(() => {
        dispatch(getUserCart(currentUser.id))
      })
      setGetSwitch(true)
      addAlert(cartQuantity, name);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addAlertDelete = () => {
    Swal.fire({
      title: "YOUR REVIEW WAS DELETED",
      text: `We are sorry that you had to delete your opinion`,
      icon: 'error',
      timer: '4000',
      timerProgressBar: true,
      allowOutsideClick: true,
      confirmButtonColor: '#ffc107'
    })
  }

  const handleClickEditReview = (item) => {
    setSelectedReview(item);
    setShowModalEdit(true);
  };
  const handleClickDeleteReview = () => {
    dispatch(deleteReviews(idProduct, selectedReview.id)).then(() => {
      dispatch(getReviews(idProduct)).then(() => {
        setShowModalDelete(false)
        addAlertDelete()
      });
    })
  }
  let medRating = 0
  if (reviews.length) {
    for (const review of reviews) {
      medRating += review.rating
    }
    medRating = (medRating / reviews.length).toFixed(2)
  }

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      dispatch(getUserWishlist(currentUser.email));
    }
  }, [dispatch]);

  function handleAgregarFavorito(id, userEmail) {
    dispatch(postFavourite(id, userEmail)).then(() => {
      getUserWishlist(userEmail)
    })

  }

  function handleQuitarFavorito(id, userEmail) {
    dispatch(deleteFavourite(id, userEmail)).then(() => {
      getUserWishlist(userEmail)
    })

  }

  return (
    <>
      {wine.name ? (<div className="container-fluid">
        <div><Banner /></div>
        <div><NavigationBar /></div>
        <div className="row" id="detail">
          {/* <!----cardl left---> */}
          <div className="col col-6">
            {maxDiscount > 0 &&
              <div className="z-2">
                <Badge pill bg="warning" text="dark" className="ms-4 mt-2">
                  {`${maxDiscount}% OFF`}
                </Badge>
              </div>
            }
            <div className="img-display z-1">
              <div className="img-showcase">
                {/* <img src={wine.image} alt="imagen" className="imgWine"/> */}
                <img src={wine.image} alt="imagen" className="mx-auto d-block" id="img-detail" />
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="d-flex align-items-center justify-content-between">
              <h1>{wine.name}</h1>
              {isLoading ? <div className="spinner-grow text-secondary" style={{ width: '3rem', height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div> :
                <h2 className="me-4">{wine.price === priceDiscount || priceDiscount === 0 ?
                  <p className="fs-4 fw-bold">${wine.price}.00-</p> :
                  <div className='d-flex align-items-center gap-4'><p className="text-decoration-line-through text-muted fs-6">${wine.price}.00-</p><p className="fs-4 fw-bold">${priceDiscount}</p></div>}</h2>}
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
              {isAuthenticated && currentUser ?
                <IconButtonWish product={wine} handleAgregarFavorito={handleAgregarFavorito} handleQuitarFavorito={handleQuitarFavorito} favourites={favourites} userEmail={currentUser.email} /> :
                <FavoriteIcon className="text-muted" disable />
              }

              <div className="input-cart">
                {wine.stock > 0 ?
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <label className="form-label" for="typeNumber">Number of boxes</label>
                      <input style={{ height: '2rem' }} type="number" min={1} max={wine.stock} id="typeNumber" className="form-control" placeholder="1" value={cartQuantity} onChange={e => setCartQuantity(e.target.value)} />
                    </div>

                    <button type="button" id="button-cart" className="btn btn-warning btn-lg mt-2 ms-4" onClick={() => handleClick(wine.id, cartQuantity, wine.name, wine.price)}>Add to cart <i class="bi bi-cart-check-fill"></i></button>
                  </div>
                  :
                  <div className="d-flex align-items-end justify-content-center gap-3 ms-4" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#df4759" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                    </svg>
                    <p className="align-top" style={{ color: '#df4759', height: '24px', fontSize: '16px' }}>Product not avilable</p>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="col col-12" id="description">
            <h3>About this wine:</h3>
            <p>{wine.details}</p>
          </div>
        </div>
        <div className="container">
          {isAuthenticated ?
            <ReviewsForm idProduct={idProduct} userEmail={currentUser.email} />
            : <div className='d-flex flex-column align-items-center gap-3 border border-3 rounded p-4 bg-light' style={{ height: '150px' }}  >
              <h3 className="">You must be login to make a review</h3>
              <LoginButton />
            </div>}
        </div>
        <div className="col col-12 p-5" id="review">
          <h3 id="reviews">REVIEWS</h3>
          {
            isAuthenticated ?
              <div>
                <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Review</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ReviewsEdit selectedReview={selectedReview} setShowModalEdit={setShowModalEdit} userEmail={user.email} />
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
              </div> : <Modal />
          }

        </div>
        {
          reviews.map((review) => <ReviewsTemplate key={review.id} review={review} handleClickEditReview={handleClickEditReview} setShowModalDelete={setShowModalDelete} setSelectedReview={setSelectedReview} />)
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
