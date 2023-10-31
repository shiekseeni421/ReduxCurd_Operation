import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, loadUsers } from "../Redux/action";
import { useNavigate } from "react-router-dom";

import "./index.scss";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => {
    return state;
  });

  const { UserDataArray } = userData.allProducts;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure Wanted to delete the user")) {
      dispatch(deleteItem(id));
    }
  };

  const HandleToEdit = (id) => {
    navigate("/Edit", { state: id });
  };

  const handleToAdd = () => {
    navigate("/Add");
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div className="Home">
      <div className="table_Head">
        <h1>Table</h1>
        <button onClick={handleToAdd}>Add Item</button>
      </div>

      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        {UserDataArray.length === 0
          ? ""
          : UserDataArray.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td className="table_button">
                    <button
                      className="Edit"
                      onClick={() => HandleToEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="Delete"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
      </table>
    </div>
  );
}
export default Home;
