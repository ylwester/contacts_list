import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "./";

const baseUrl =
  "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com";
export const getContacts = createAsyncThunk<Contact[]>(
  "contacts/get",
  async () => {
    const response = await fetch(`${baseUrl}/users.json`);
    return response.json();
  }
);
