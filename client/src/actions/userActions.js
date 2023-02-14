import { GET_ALL_USERS, GET_USER, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER } from "./allActions";
import axios from "axios";

const headers = {
    headers: {
      "accept-encoding": null,
    },
  };

  export function getAllUsers () {
    return async function (dispatch) {

            let users = await axios.get("http://localhost:3001/users");
            return (
            dispatch({
                type: GET_ALL_USERS,
                payload: users.data,
            })
        )
    };
  };

  export function getUser (email) {
    return async function (dispatch) {

            let user = await axios.get(`http://localhost:3001/users/${email}`);
            return (
            dispatch({
                type: GET_USER,
                payload: user.data,
            })
        )
    };
  };


  export function createUser (payload) {
        return async function (dispatch) {
          try {
            let user = await axios.post('http://localhost:3001/users/auth', payload);
            return dispatch ({
              type: CREATE_USER,
              payload: user.data
            });
          } catch (error) {
            console.log("ERROR", error)
          }    
        };
      };

 export function editUserInfo (id, payload) {
    return async function (dispatch) {
        try{
            let updatedUser = await axios.put(`http://localhost:3001/users/${id}`, payload);
            dispatch({
                type: EDIT_USER,
                payload: updatedUser.data
            });
        } catch (e) {
            console.log("Error", e)
        }
    };
 };