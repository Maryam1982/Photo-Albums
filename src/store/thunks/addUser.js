import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

// const baseURL = "http://localhost:3005";
const baseURL = "https://json-server-photo-albums.onrender.com";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(`${baseURL}/users`, {
    name: faker.person.fullName(),
  });

  return response.data;
});

export { addUser };
