import { useAppDispatch } from "../";
import { useCallback } from "react";
import { getContacts } from "./thunks";
import { useSelector } from "react-redux";
import { selectContactsData, selectSelectedContacts } from "./selectors";
import { clearSelected, toggleContactId } from ".";

const useContacts = () => {
  const dispatch = useAppDispatch();
  const contactsList = useSelector(selectContactsData);
  const selectedContacts = useSelector(selectSelectedContacts);

  const fetchContacts = useCallback(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const toggleContact = useCallback(
    (contactId: number) => {
      dispatch(toggleContactId(contactId));
    },
    [dispatch]
  );

  const clearSelectedContacts = useCallback(() => {
    dispatch(clearSelected());
  }, [dispatch]);

  return {
    contactsList,
    selectedContacts,
    fetchContacts,
    toggleContact,
    clearSelectedContacts,
  };
};

export default useContacts;
