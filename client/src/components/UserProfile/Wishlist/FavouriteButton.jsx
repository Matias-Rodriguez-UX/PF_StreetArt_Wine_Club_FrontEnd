import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFavourite } from "../../../actions/userActions";

export default function FavButton(props) {
  
    return (
        <button>
          <i class="bi bi-heart"></i>  
        </button>
        
    )
}