import "./Wine-cards.css";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function Winecards({id, image, name, price, winery }) {




return(
    <div>
        <div> <img src={`${image}`} alt="img" /> </div>
        <Link to={`/ruta/${id}`}>
            <h2 className="cardName"> {name} </h2>
        </Link>
        <p> { winery } </p>
        <p className="cardPrecio"> {price} </p>
        <Link to={`/${id}`}>
            <h2 className="cardComprar"> Comprar </h2>
        </Link>
        <div> 
            
        </div>
    </div>
)
}
