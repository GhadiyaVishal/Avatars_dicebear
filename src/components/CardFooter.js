import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Button from "@mui/material/Button";

const CardFooter = ({ openModal, data, deleteUser }) => {
  const [isLike, setIsLike] = useState(true);

  // CLICK TO LIKE/DISLIKE
  function toggleLike() {
    setIsLike(prev => !prev);
  }

  return (
    <>
      <div className="btns">
        <Button onClick={toggleLike}>
          {isLike ? (
            <span className="like">
              <FavoriteBorderOutlinedIcon />
            </span>
          ) : (
            <span className="like">
              <FavoriteOutlinedIcon />
            </span>
          )}
        </Button>
        <Button onClick={openModal} className="line">
          <span className="edit">
            <BorderColorOutlinedIcon />
          </span>
        </Button>
        <Button onClick={() => deleteUser(data)}>
          <span className="trash">
            <DeleteForeverIcon />
          </span>
        </Button>
      </div>
    </>
  );
};

export default CardFooter;
