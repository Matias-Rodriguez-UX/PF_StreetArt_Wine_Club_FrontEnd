import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';;
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function IconButtonWhish({ product }) {
    const [wishlist, setWishlist] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            setWishlist([...wishlist, product]);
        } else {
            setWishlist(wishlist.filter((item) => item.id !== product.id));
        }
    };

    return (
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            {isFavorite ? (
                <FavoriteIcon className="text-danger" />
            ) : (
                <FavoriteBorderIcon className="text-muted" />
            )}
        </IconButton>
    )
}