import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./thunks";

type Gender = "Male" | "Female";

export type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: Gender;
  avatar: string | null;
};

type ContactsState = {
  contactsData: Contact[];
  selectedIds: number[];
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: ContactsState = {
  contactsData: [],
  selectedIds: [],
  status: "idle",
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    toggleContactId(state, action) {
      const contactId = action.payload;
      const selectedIndex = state.selectedIds.indexOf(contactId);

      if (selectedIndex === -1) {
        state.selectedIds.push(contactId);
      } else {
        state.selectedIds.splice(selectedIndex, 1);
      }
    },
    clearSelected(state) {
      state.selectedIds = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        const sortedByLastName = action.payload.sort((a, b) =>
          a.last_name.toLowerCase() < b.last_name.toLowerCase() ? -1 : 1
        );
        state.contactsData = sortedByLastName;
        state.status = "succeeded";
      })
      .addCase(getContacts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { toggleContactId, clearSelected } = contactsSlice.actions;
export default contactsSlice.reducer;
