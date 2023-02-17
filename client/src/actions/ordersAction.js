import axios from "axios";
import { loadingAction } from ".";
import {
    GET_ORDERS
} from "./allActions";

const headers = {
    headers: {
        "accept-encoding": null,
    },
};


export function getOrders() {
    return async function (dispatch) {
        try {
            let orders = await axios.get("/orders", headers);
            return (
                dispatch({
                    type: GET_ORDERS,
                    payload: orders.data,
                }),
                dispatch(loadingAction(false))
            );
        } catch (error) {
            return error;
        }
    };
}