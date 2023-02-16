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

export function postMemberships(body) {
    return async function () {
        try {
            let memberships = await axios.post("http://localhost:3001/users/membership", body);
            return (
                memberships.status
            );
        } catch (error) {
            return error, console.log(error);
        }
    };
}

export function updateMemberships(id, body) {
    return async function () {
        try {
            let memberships = await axios.put(`http://localhost:3001/users/membership/${id}`, body);
            return (
                memberships.status
            );
        } catch (error) {
            return error, console.log(error);
        }
    };
}
export function deleteMemberships(id) {
    return async function () {
        try {
            let memberships = await axios.delete(`http://localhost:3001/users/membership/${id}`, headers);
            return (
                memberships.status
            );
        } catch (error) {
            return error, console.log(error);
        }
    };
}

