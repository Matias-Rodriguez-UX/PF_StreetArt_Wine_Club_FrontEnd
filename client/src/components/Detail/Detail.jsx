import React from "react";
import {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
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
        <div className="container">
          <div>NABVAR</div>
          <div className="row">
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
                  <li>Winreys: </li>
                  <li>State: </li>
                  <li>Regions: </li>
                </ul>
                <input
                  type="number"
                  value="1"
                  name= "rating"
                />
                <button type="button" className="btn-purchase">Add to cart</button>
              </div>
            </div>
            <div className="col col-12">
              <h3>About this wine:</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          
        </div>
      )
}