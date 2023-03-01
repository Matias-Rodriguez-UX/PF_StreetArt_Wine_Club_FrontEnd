import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart, loadingAction } from "../../../actions";
import { addUserCart, deleteFavourite, getUserCart, getUserWishlist, postFavourite, updateUserCart } from "../../../actions/userActions";
import Winecards from "../../Shop/WineCard/WineCard";
import FavButton from "./FavouriteButton";

export default function Wishlist({ favourites, setCurrentPage, currentUser}) {
  setCurrentPage('wishlist')
  const dispatch = useDispatch();
  //const favourites = useSelector((state) => state.users.userWishlist);
  const userInfo = useSelector((state) => state.users.userInfo);
  //const showLoading = useSelector((state) => state.products.showLoading)
  const cart = useSelector((state) => state.products.cart)
  const [getSwitch, setGetSwitch] = useState(false)

  useEffect(() => {
    if (userInfo) {
      dispatch(loadingAction(true))
      dispatch(getUserWishlist(userInfo.email));
    }
  }, [dispatch, favourites]);

  function handleAgregarFavorito(id, userEmail) {
    dispatch(postFavourite(id, userEmail))
  }

  function handleQuitarFavorito(id, userEmail) {
    dispatch(deleteFavourite(id, userEmail))
  }

  const addAlert = (cartQuantity, name) => {
    Swal.fire({
        title: "YOUR PRODUCT WAS ADDED",
        text: `You have added ${cartQuantity} ${name} Box`,
        icon: 'success',
        timer: '4000',
        timerProgressBar: true,
        allowOutsideClick: true,
        confirmButtonColor: '#ffc107'
    })
}

  const addCart = (id, cartQuantity, name, price) => {
    if (userInfo) {
        if (cart.some(el => el.id === id)) {
            let updateWine = cart.find(el => el.id === id)
            dispatch(updateUserCart({
                userId: userInfo.id,
                totalPrice: price,
                quantity: updateWine.cartQuantity + 1,
                email: userInfo.email,
                productId: id,
            }))
            setGetSwitch(true)
            return addAlert(cartQuantity, name);
        }
        dispatch(addUserCart({
            userId: userInfo.id,
            totalPrice: price,
            quantity: 1,
            email: userInfo.email,
            productId: id,
        }))
        setGetSwitch(true)
        addAlert(cartQuantity, name);
    }
    if (!userInfo) {
        dispatch(addToCart(id, cartQuantity));
        addAlert(cartQuantity, name);
    }
}

useEffect(() => {
      dispatch(getUserCart(userInfo.id))
}, [dispatch, cart])

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
                addCart={addCart}
                handleAgregarFavorito={handleAgregarFavorito}
                handleQuitarFavorito={handleQuitarFavorito}
                userEmail={userInfo.email}
                favourites={favourites}
                key={el.id}
                currentUser={userInfo}
                cartQuantity={1}
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
