import { RootState } from "../";

export const selectContactsData = (state: RootState) =>
  state.contacts.contactsData;

export const selectSelectedContacts = (state: RootState) =>
  state.contacts.selectedIds;
