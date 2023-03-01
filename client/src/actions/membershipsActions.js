import axios from "axios";
import { loadingAction } from ".";
import {
    DELETE_MEMBERSHIPS,
    GET_MEMBERSHIPS,
    POST_MEMBERSHIP,
    UPDATE_MEMBERSHIPS
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
    return async function (dispatch) {
        try {
            let memberships = await axios.post("/users/membership", body);
            return (
                dispatch({
                    type: POST_MEMBERSHIP,
                    payload: memberships.data,
                }),
                loadingAction(false)
            );
        } catch (error) {
            return error, console.log(error);
        }
    };
}

export function updateMemberships(id, body) {
    return async function (dispatch) {
        try {
            let memberships = await axios.put(`/users/membership/${id}`, body);
            return (
                dispatch({
                    type: UPDATE_MEMBERSHIPS,
                    payload: memberships.data,
                }),
                loadingAction(false)
            );
        } catch (error) {
            return error, console.log(error);
        }
    };
}
export function deleteMemberships(id) {
    return async function (dispatch) {
        try {
            let memberships = await axios.delete(`/memberships/${id}`, headers);
            console.log(memberships)
            return (
                dispatch({
                    type: DELETE_MEMBERSHIPS,
                    payload: memberships.data,
                }),
                loadingAction(false)
            );
        } catch (error) {
            return error, console.log(error);
        }
    };
}

