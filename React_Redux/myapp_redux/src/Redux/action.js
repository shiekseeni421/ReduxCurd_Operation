import { actionType } from "./contants/actiontyp";
import Axios from "axios";

const setUserData = (UserDataArray) => {
  return {
    type: actionType.GET_DATA,
    payload: UserDataArray,
  };
};
const userDeleted = () => {
  return {
    type: actionType.DELETE_DATA,
  };
};

const EditItem = (UserDataArray) => {
  return {
    type: actionType.EDIT_ITEM,
    payload: UserDataArray,
  };
};

const CreateItem = (UserDataArray) => {
  return {
    type: actionType.ADD_ITEM,
    payload: UserDataArray,
  };
};
export const loadUsers = () => {
  return function (dispatch) {
    Axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch(setUserData(res.data));
      })
      .catch((err) => {
        console.log("error");
      });
  };
};

export const deleteItem = (id) => {
  return function (dispatch) {
    Axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        console.log(res.data, "delete Item");
      })
      .catch((err) => {
        console.log("error");
      });
  };
};

export const EditData = (Key, data) => {
  return function (dispatch) {
    Axios.put(`https://jsonplaceholder.typicode.com/posts/${Key}`, {
      userId: 1,
      id: Key,
      title: data.title,
      body: data.body,
    })
      .then((res) => {
        dispatch(EditItem());
        console.log(res.data, "Edit Item");
      })
      .catch((err) => {
        console.log("error");
      });
  };
};

export const AddItem = (data) => {
  return function (dispatch) {
    Axios.post(`https://fakestoreapi.com/auth/login`, {
      username: data.username,
      password: data.password,
    })
      .then((res) => {
        dispatch(CreateItem());
        console.log(res.data, "Add Item");
      })
      .catch((err) => {
        console.log("error");
      });
  };
};
