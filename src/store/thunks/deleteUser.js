import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3005";
// const baseURL =
//   "https://my-json-server.typicode.com/Maryam1982/JSON-Server-Photo-Album";

const deleteUser = createAsyncThunk("users/delete", async (user) => {
  const response = await axios.delete(`${baseURL}/users/${user.id}`);
  return response.data;
});

export { deleteUser };
