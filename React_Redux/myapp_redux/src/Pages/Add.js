import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../Redux/action";

import "./index.scss";

function Add() {
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(AddItem(data));
  };
  return (
    <div className="Update">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username")}
          placeholder="Title"
          className="input_1"
        />
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Add;
