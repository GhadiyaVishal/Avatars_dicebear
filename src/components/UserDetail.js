import React from "react";
import Users from "./Users";

const UserDetail = ({ data, deleteUser,editUser }) => {
  return (
    <>
      {data.map((item,i) => {
        return <Users key={item.id} index={i} user={item} deleteUser={deleteUser} editUser={editUser} />
       })}
    </>
  );
};

export default UserDetail;
