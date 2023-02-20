import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';;
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist } from '../../../../actions/userActions';

export default function IconButtonWish({ product, handleAgregarFavorito, handleQuitarFavorito, favourites }) {
    const dispatch = useDispatch();
    const [favorito, setFavorito] = useState(false);
    const userInfo = useSelector((state) => state.users.userInfo);

    useEffect(() => {
        if (userInfo) {
            dispatch(getUserWishlist(userInfo.email));
        }
    }, [dispatch, favorito]);

    useEffect(() => {
        if (favourites.length && favourites.products.find((e) => e.id === product.id)) {
            setFavorito(true);
        } else {
            setFavorito(false);
        }
        console.log(userInfo)
    }, [favourites, product.id]);

    return (
        <IconButton aria-label="add to favorites" onClick={() => {
            if (favorito) {
                handleQuitarFavorito(product.id, userInfo);
                setFavorito(false);
            } else {
                handleAgregarFavorito(product.id, userInfo);
                setFavorito(true);
            }
        }}>
            {favorito ? (
                <FavoriteIcon className="text-danger" />
            ) : (
                <FavoriteBorderIcon className="text-muted" />
            )}
        </IconButton>
    )
}