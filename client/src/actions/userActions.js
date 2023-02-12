import { GET_ALL_USERS, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER, POST_USER_INFO } from "./allActions";
import axios from "axios";

const headers = {
    headers: {
      "accept-encoding": null,
    },
  };

  export function getAllUsers () {
    return async function (dispatch) {
        try {
            let users = await axios.get("http://localhost:3001/users");
            return (
            dispatch({
                type: GET_ALL_USERS,
                payload: users.data,
            })
        )
        } catch (error) {
            return error;
        }
    };
  };

  export function createUser (payload) {
        return async function () {
          try {
            let user = await axios.post('http://localhost:3001/users', payload);
            return user;
          } catch (error) {
            console.log("ERROR", error)
          }    
        };
      };

      export function postUserInfo (payload) {
        return async function () {
          try {
            let data = await axios.post('http://localhost:3001/users/auth', payload);
            return data;
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