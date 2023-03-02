import React from "react";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loader } from "../Loader";
import { getProducts, loadingAction, addToCart } from "../../actions";
import Winecards from "./WineCard/WineCard";
import './shop.css'
import Filters from "./Filters/Filters";
import Sort from "./Sorts";
import WebPagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar";
import Swal from 'sweetalert2';
import { deleteFavourite, getUserWishlist, postFavourite } from "../../actions/userActions";
import { getUserCart, getUserInfo, updateUserCart } from "../../actions/userActions";
import { useAuth0 } from "@auth0/auth0-react";
import { addUserCart } from "../../actions/userActions";
import { getMemberships } from "../../actions/membershipsActions";



export default function Shop() {
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.users.userInfo);
    const favourites = useSelector((state) => state.users.userWishlist);
    const allMemberships = useSelector((state) => state.memberships.allMemberships)
    const showLoading = useSelector((state) => state.products.showLoading)
    const allProducts = useSelector((state) => state.products.allProducts)
    const Products = useSelector((state) => state.products.products)
    const cart = useSelector((state) => state.products.cart)
    const currentUser = useSelector((state) => state.users.userInfo)
    const [sort, setSort] = useState('')

    const [getSwitch, setGetSwitch] = useState(false)

    const { user, isAuthenticated, isLoading } = useAuth0();

    const [currentPage, setCurrentPage] = useState(1);
    const [winesPerPage, setWinesPerPage] = useState(4);
    const indexOfLastWine = currentPage * winesPerPage;
    const indexOfFirstWine = indexOfLastWine - winesPerPage;
    const currentWines = Products.slice(indexOfFirstWine, indexOfLastWine);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    useEffect(() => {
        if (isAuthenticated && userInfo) {
            dispatch(getUserWishlist(userInfo.email));
        }
        dispatch(getMemberships())
    }, [dispatch]);

    useEffect(() => {
        if (Products.length === 0) {
            dispatch(loadingAction(true))
            dispatch(getProducts());
        }
    }, [dispatch]);

    useEffect(() => {
        if (getSwitch) {
            dispatch(getUserCart(currentUser.id))
            return setGetSwitch(false)
        }
        if (!isAuthenticated) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [dispatch, getSwitch, cart])

    useEffect(() => {
        if (!currentUser.id && isAuthenticated) {
            dispatch(getUserInfo(user.email))
        }
    }, [dispatch, isAuthenticated, currentUser.id])

    function handleClick(e) {
        e.preventDefault()
        dispatch(loadingAction(true))
        dispatch(getProducts())
    }

    const allGrapes = () => {
        let grapes = []
        grapes = allProducts.map(product => product.grapes?.map(grape => grape.name))
        const result = Array.from(new Set(grapes.flat()))
        return result
    }
    const allStates = () => {
        let states = []
        states = allProducts.map(product => product.states?.map(grape => grape.name))
        const result = Array.from(new Set(states.flat()))
        return result
    }
    const allTypes = () => {
        let types = []
        types = allProducts.map(product => product.types?.map(types => types.name))
        const result = Array.from(new Set(types.flat()))
        return result
    }

    const allQuantity = () => {
        let quantities = []
        quantities = allProducts.map(product => product.quantity)
        const result = Array.from(new Set(quantities))
        return result
    }
    const allPrices = () => {
        let prices = []
        prices = Products.map(product => product.price)
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const result = [min, max]
        return result
    }

    const addAlert = (cartQuantity, name) => {
        Swal.fire({
            title: "YOUR PRODUCT WAS ADDED",
            text: `You have added ${cartQuantity} ${name} Box`,
            icon: 'success',
            timer: '2500',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
        })
    }

    const addCart = (id, cartQuantity, name, price) => {
        if (isAuthenticated) {
            if (cart.some(el => el.id === id)) {
                let updateWine = cart.find(el => el.id === id)
                dispatch(updateUserCart({
                    userId: currentUser.id,
                    totalPrice: price,
                    quantity: updateWine.cartQuantity + 1,
                    email: user.email,
                    productId: id,
                }))
                setGetSwitch(true)
                return addAlert(cartQuantity, name);
            }
            dispatch(addUserCart({
                userId: currentUser.id,
                totalPrice: price,
                quantity: 1,
                email: user.email,
                productId: id,
            })).then(() => {
                dispatch(getUserCart(currentUser.id))
            })
            setGetSwitch(true)
            addAlert(cartQuantity, name)
        }
        if (!isAuthenticated) {
            dispatch(addToCart(id, cartQuantity));
            addAlert(cartQuantity, name);
        }
    }


    const grapes = allGrapes()
    const states = allStates()
    const types = allTypes()
    const quantities = allQuantity()
    const prices = allPrices()





    function handleAgregarFavorito(id, userEmail) {
        dispatch(postFavourite(id, userEmail))

    }

    function handleQuitarFavorito(id, userEmail) {
        dispatch(deleteFavourite(id, userEmail))

    }



    return (
        <>
            <Banner />
            <NavigationBar />
            <Sort
                handleClick={handleClick}
                setSort={setSort}
                setCurrentPage={setCurrentPage}
            />
            <SearchBar />
            <div className="row g-3 py-2">
                <div className="col-3 col-sm-3 col-lg-3 py-4" >
                    <Filters
                        grapes={grapes}
                        states={states}
                        types={types}
                        quantities={quantities}
                        prices={prices}
                        setCurrentPage={setCurrentPage}
                    />
                </div>

                {showLoading || isLoading ?

                    <Loader />

                    :
                    <div className="Cards container col py-5">
                        {currentWines?.length ? currentWines?.map((el) => {
                            return (
                                <Winecards
                                    key={el.id}
                                    image={el.image}
                                    name={el.name}
                                    winery={el.winery}
                                    price={el.price}
                                    id={el.id}
                                    stock={el.stock}
                                    addCart={addCart}
                                    handleAgregarFavorito={handleAgregarFavorito}
                                    handleQuitarFavorito={handleQuitarFavorito}
                                    // favorito={favorito}
                                    userEmail={userInfo.email}
                                    favourites={favourites}
                                    currentUser={currentUser}
                                    allMemberships={allMemberships}
                                />
                            )
                        }) : <h1>Wines not Found</h1>}
                    </div>}
                <WebPagination
                    winesPerPage={winesPerPage}
                    numberOfWines={Products.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pagination={pagination} />
            </div>

            <Footer />
        </>
    )
}
