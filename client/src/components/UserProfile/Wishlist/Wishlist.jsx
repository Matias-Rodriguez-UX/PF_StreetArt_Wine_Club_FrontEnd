import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../actions";
import { getUserWishlist, postFavourite } from "../../../actions/userActions";
import Winecards from "../../Shop/WineCard/WineCard";
import FavButton from "./FavouriteButton";

export default function Wishlist() {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.users.userWishlist);
  const userInfo = useSelector((state) => state.users.userInfo);
  //const showLoading = useSelector((state) => state.products.showLoading)

  /* const [favorito, setFavorito] = useState(false); */

  /* function handleAgregarFavorito(e) {
    setFavorito(true);
    // Aquí se podría agregar el producto a una lista de favoritos en el estado de la aplicación
    dispatch(postFavourite(favourites.products.id, userInfo.email))
  } */


  useEffect(() => {
    dispatch(loadingAction(true))
    dispatch(getUserWishlist(userInfo.email));
  }, [dispatch]);

  return (
    <>
      {favourites.products ? (
        <div className="Cards container col py-5">
          {favourites.products.map((el) => {
              return (
                  <Winecards
                  image={el.image}
                  name={el.name}
                  winery={el.winery}
                  price={el.price}
                  id={el.id}
                  />
            );
          })}
        </div>
      ) : (
        <h1>You haven't added any products yet!</h1>
      )}
    </>
  );
}
