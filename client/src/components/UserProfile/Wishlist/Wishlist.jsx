import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../actions";
import { deleteFavourite, getUserWishlist, postFavourite } from "../../../actions/userActions";
import Winecards from "../../Shop/WineCard/WineCard";
import FavButton from "./FavouriteButton";

export default function Wishlist({ favourites, setCurrentPage }) {
  setCurrentPage('wishlist')
  const dispatch = useDispatch();
  //const favourites = useSelector((state) => state.users.userWishlist);
  const userInfo = useSelector((state) => state.users.userInfo);
  //const showLoading = useSelector((state) => state.products.showLoading)


  useEffect(() => {
    if (userInfo) {
      dispatch(loadingAction(true))
      dispatch(getUserWishlist(userInfo.email));
    }
  }, [dispatch]);

  function handleAgregarFavorito(id, userEmail) {
    dispatch(postFavourite(id, userEmail))
  }

  function handleQuitarFavorito(id, userEmail) {
    dispatch(deleteFavourite(id, userEmail))
  }

  return (
    <>
      {favourites ? (
        <div className="Cards container col py-5">
          {favourites.map((el) => {
            return (
              <Winecards
                image={el.image}
                name={el.name}
                winery={el.winery}
                price={el.price}
                id={el.id}
                // addCart={addCart}
                handleAgregarFavorito={handleAgregarFavorito}
                handleQuitarFavorito={handleQuitarFavorito}
                userEmail={userInfo.email}
                favourites={favourites}
                key={el.id}
                currentUser={userInfo}
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
