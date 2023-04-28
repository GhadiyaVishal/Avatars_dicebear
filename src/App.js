import React, { useState, useEffect } from "react";
import "./SCSS/style.css";
import { fetchData } from "./Api ";
import UserDetail from "./components/UserDetail";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // FETCH API AND STORE DATA
  const getData = async () => {
    try {
      const result = await fetchData();
      setData(result.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // DELETE PERTICULAR USER
  const deleteUser = (id) => {
    const updateUser = data.filter((user) => user.id !== id);
    setData(updateUser);
  };

  // EDIT USER
  const editUser = ({ user, index, callback }) => {
    const newUserList = data;
    newUserList[index] = user;
    setData([...newUserList], callback());
  };

  return (
    <>
      {!error ? (
        <UserDetail data={data} deleteUser={deleteUser} editUser={editUser} />
      ) : (
        <h2>{error} </h2>
      )}
    </>
  );
};

export default App;
