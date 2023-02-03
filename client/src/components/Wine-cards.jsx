import "./Wine-cards.css";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function Winecards({id, image, name, precio, typeId}) {




return(
    <div>
        <div> <img src={`${image}`} alt="img" /> </div>
        <Link to={`/ruta/${id}`}>
            <h2 className="cardName"> {name} </h2>
        </Link>

        <p> Precio: {precio} </p>
        <p> Tipo de vino: { typeId }</p>
    </div>
)
}
