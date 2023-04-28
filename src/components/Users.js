import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import CardFooter from "./CardFooter";

const fields = ["name", "email", "phone", "website"];

const Users = ({ user, deleteUser, editUser, index }) => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(user);

  // SET INPUT FIELD VALUE AND SET UPDATED DATA
  const onChangeField = (field, value) => {
    setInfo((state) => ({
      ...state,
      [field]: value,
    }));
  };

  // CLICK TO EDIT USER DATA
  const saveUser = (e) => {
    e.preventDefault();
    editUser({ user: info, index, callback: handleClose });
  };

  //CLICK TO CLOSE DAILOG BOX
  const handleClickOpen = () => {
    setOpen(true);
  };

  // CLICK TO CLOSE DAILOG BOX
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="card">
        <div className="img_container">
          <img
            className="image"
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            alt="avatar"
          />
        </div>
        <div className="body-info">
          <h3>{user.name}</h3>
          <Typography className="user_data">
            <MailOutlineIcon className="icons"/>
            {user.email}
          </Typography>
          <Typography className="user_data">
            <AddIcCallOutlinedIcon className="icons"/>
            {user.phone}
          </Typography>
          <Typography className="user_data">
            <LanguageOutlinedIcon className="icons"/>
            https://{user.website}
          </Typography>
        </div>
        <CardFooter
          openModal={handleClickOpen}
          data={user.id}
          deleteUser={deleteUser}
        />
      </div>

   
      <Dialog fullWidth open={open} onClose={handleClose} >
        <DialogTitle>Basic Modal</DialogTitle>
        <DialogContent>
          {fields.map((item) => {
            const err = !user[item] || !info[item]?.length;
            return (
              <div className="input-container">
                <div className="input-label">{item}:</div>
                <TextField
                  className="input-field"
                  fullWidth
                  onChange={(e) => onChangeField(item, e.target.value)}
                  size="large"
                  error={err}
                  id="outlined-error-helper-text"
                  defaultValue={user[item]}
                  helperText={err ? "This is Required field" : " "}
                  required={true}
                ></TextField>
              </div>
            );
          })}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} varient="outlined">
            cancel
          </Button>
          <Button varient="contained" onClick={saveUser} disabled={
            info.name.length === 0 || info.email.length === 0 || info.phone.length === 0 || info.website.length === 0 
          }>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Users;
