import { Flex } from "@chakra-ui/react";
import useContacts from "store/contacts/useContacts";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import ContactsHeader from "components/contacts/contacts-header";
import ContactsList from "components/contacts/list";

const Contacts = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const {
    clearSelectedContacts,
    contactsList,
    fetchContacts,
    toggleContact,
    selectedContacts,
  } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
  };
  const handleClearSearch = () => {
    setSearchPhrase("");
  };

  useEffect(() => {
    console.log(`Currently selected ids are: `, selectedContacts);
  }, [selectedContacts]);

  const filteredContacts = useMemo(
    () =>
      searchPhrase
        ? contactsList.filter(
            (contact) =>
              contact.first_name
                .toLowerCase()
                .includes(searchPhrase.toLowerCase()) ||
              contact.last_name
                .toLowerCase()
                .includes(searchPhrase.toLowerCase())
          )
        : contactsList,
    [searchPhrase, contactsList]
  );

  return (
    <Flex maxW="container.xl" flex={1} px={[2, 4]}>
      <Flex flexDirection="column" flex={1} mt={4}>
        <ContactsHeader
          handleSearchInput={handleSearchInput}
          handleClearSearch={handleClearSearch}
          searchPhrase={searchPhrase}
          clearSelectedContacts={clearSelectedContacts}
          selectedContacts={selectedContacts}
        />
        <ContactsList
          toggleContact={toggleContact}
          filteredContacts={filteredContacts}
          selectedContacts={selectedContacts}
        />
      </Flex>
    </Flex>
  );
};
export default Contacts;
