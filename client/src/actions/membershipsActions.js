import axios from "axios";
import { loadingAction } from ".";
import {
    GET_MEMBERSHIPS
} from "./allActions";

const headers = {
    headers: {
        "accept-encoding": null,
    },
};


export function getMemberships() {
    return async function (dispatch) {
        try {
            let memberships = await axios.get("/memberships", headers);
            return (
                dispatch({
                    type: GET_MEMBERSHIPS,
                    payload: memberships.data,
                }),
                dispatch(loadingAction(false))
            );
        } catch (error) {
            return error;
        }
    };
}