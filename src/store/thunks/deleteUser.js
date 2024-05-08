import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const baseURL = "http://localhost:3005";
const baseURL = "https://json-server-photo-albums.onrender.com";

const deleteUser = createAsyncThunk("users/delete", async (user) => {
  await axios.delete(`${baseURL}/users/${user.id}`);
  return user;
});

export { deleteUser };
