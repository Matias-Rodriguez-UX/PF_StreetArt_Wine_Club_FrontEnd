import { GET_ALL_USERS, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER } from "./allActions";
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

  export function getUserInfo () {
    return async function (dispatch, email) {

            let userInfo = await axios.get(`http://localhost:3001/users/${email}`);
            return (
            dispatch({
                type: GET_USER_INFO,
                payload: userInfo.data,
            })
        )
    };
  };

  export function createUser (payload) {
        return async function () {
          try {
            let user = await axios.post('http://localhost:3001/users/auth', payload);
            return user;
          } catch (error) {
            console.log("ERROR", error)
          }    
        };
      };

 export function editUserInfo (id, payload) {
    return async function () {
        try{
            let updatedUser = await axios.put(`http://localhost:3001/users/${id}`, payload);
            return updatedUser.status
        } catch (e) {
            console.log("Error", e)
        }
    };
 };