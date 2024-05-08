import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const baseURL = "http://localhost:3005";
const baseURL = "https://json-server-photo-albums.onrender.com";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(`${baseURL}/users`);

  await pause(1000);
  return response.data;
});

//FOR DEVELOPMENT
const pause = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
