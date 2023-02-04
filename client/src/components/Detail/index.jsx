import React from "react";
import {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import '../Detail/Detail.css';
import NavigationBar from "../Navbar/index";
import Banner from '../Home/Banner/index';
import Footer from '../Footer/index'
/* import {videogameDetail} from '../../actions/index'; */
import '../Detail/Detail.css';
/* import Loading from "../Loading/Loading.jsx"; */

export default function Detail(props){
    /* const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wineDetail(props.match.params.id));
      }, [dispatch]);

    const wine = useSelector((state) => state.wineDetail);
 */
      return(
        <div className="container-fluid">
          <div><Banner /></div>
          <div><NavigationBar /></div>
          <div className="row" id="detail">
            {/* <!----cardl left---> */}
            <div className="col col-6">
              <div className="img-display">
                <div className="img-showcase">
                  {/* <img src={wine.image} alt="imagen" className="imgWine"/> */}
                  <img src="https://www.shutterstock.com/image-vector/wine-bottle-isolated-on-white-260nw-540522802.jpg" alt="imagen" className="mx-auto d-block"/>
                </div>
              </div>
            </div>
            {/* <!----cardl riht---> */}
            <div className="col col-6">
              <h1>NOMBRE VINO</h1>
              <div>☆&nbsp;&nbsp;<span>Num star</span></div>
              <div className="product-price">
                <h2>Price: <span>$999</span></h2>
              </div>
              <div className="product-description">
                <ul>
                  <li>Grapes: </li>
                  <li>Winery: </li>
                  <li>Type: </li>
                  <li>State: </li>
                  <li>Regions: </li>
                </ul>
                <div className="input-cart">
                  <input type="number" id="typeNumber" class="form-control" />
                  <button type="button" id="button-cart" className="btn btn-warning btn-sm">Add to cart <i class="bi bi-cart-check-fill"></i></button>
                  
                </div>
              </div>
            </div>
            <div className="col col-12" id="description">
              <h3>About this wine:</h3>
                <p>DETAIL Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="col col-12 p-5" id="review">
            <h3>REVIEW</h3>
          </div>
          <div class=" d-flex mt-3 mb-4 align-items-center justify-content-center">
              <div className="img-avatar">
                <img src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1675202276/samples/people/smiling-man.jpg" className="avatar-image" alt="image" />
              </div>
              <div class="ms-3">
                <h6 class="mb-1">Jack</h6>
                 <p class="mb-0">Kind Heart Charity is the most supportive organization. This is Bootstrap 5 HTML CSS template for everyone. Thank you.</p>
                  <div class="d-flex mt-2">
                      <a href="#" class=" me-3">Like</a>

                      <a href="#" class="">Reply</a>
                  </div>
              </div>
          </div>
          <div class=" d-flex mt-3 mb-4 align-items-center justify-content-center">
              <div className="img-avatar">
                <img src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1675202276/samples/people/smiling-man.jpg" className="avatar-image" alt="image" />
              </div>
              <div class="ms-3">
                <h6 class="mb-1">Jack</h6>
                 <p class="mb-0">Kind Heart Charity is the most supportive organization. This is Bootstrap 5 HTML CSS template for everyone. Thank you.</p>
                  <div class="d-flex mt-2">
                      <a href="#" class=" me-3">Like</a>

                      <a href="#" class="">Reply</a>
                  </div>
              </div>
          </div>
          <div className="col col-12">
            <Footer />
          </div>
        </div>
      )
}