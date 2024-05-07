import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const baseURL = "http://localhost:3005";
// const baseURL =
//   "https://my-json-server.typicode.com/Maryam1982/JSON-Server-Photo-Album";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(`${baseURL}/users`, {
    name: faker.person.fullName(),
  });

  return response.data;
});

export { addUser };
