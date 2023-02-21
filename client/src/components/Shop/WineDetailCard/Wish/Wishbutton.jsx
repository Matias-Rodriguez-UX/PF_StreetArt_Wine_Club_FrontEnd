import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';;
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function IconButtonWish({ product, handleAgregarFavorito, handleQuitarFavorito, favourites, userEmail }) {
    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        if (favourites.length && favourites.find((e) => e.id === product.id)) {
            setFavorito(true);
        } else {
            setFavorito(false);
        }
    }, [favourites]);


    return (
        <IconButton aria-label="add to favorites" onClick={() => {
            if (favorito) {
                handleQuitarFavorito(product.id, userEmail);
                setFavorito(false);
            } else {
                handleAgregarFavorito(product.id, userEmail);
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