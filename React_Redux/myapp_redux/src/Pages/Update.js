import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { EditData } from "../Redux/action";

function Update() {
  const location = useLocation();
  const dispatch = useDispatch();

  const id = location.state;

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(EditData(id, data));
  };

  return (
    <div className="Update">
      <h1>Edit Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" className="input_1" />
        <input {...register("body")} placeholder="Body" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Update;
