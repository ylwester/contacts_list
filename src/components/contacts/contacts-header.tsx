import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type Props = {
  searchPhrase: string;
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch: () => void;
  selectedContacts: number[];
  clearSelectedContacts: () => void;
};

const ContactsHeader = ({
  searchPhrase,
  handleSearchInput,
  handleClearSearch,
  selectedContacts,
  clearSelectedContacts,
}: Props) => {
  return (
    <Flex flexDir="column">
      <Flex align="center" mb={2}>
        <Flex fontSize={24} mr={6}>
          Contacts list
        </Flex>
        <Input
          flex={1}
          mr={6}
          bgColor="gray.50"
          value={searchPhrase}
          placeholder="Search contacts..."
          onChange={handleSearchInput}
        />
        <Button
          variant="solid"
          colorScheme="purple"
          size="sm"
          onClick={handleClearSearch}
        >
          Clear search
        </Button>
      </Flex>
      <Flex mb={2} align="center">
        <Box>Selected: {selectedContacts.length}</Box>
        {selectedContacts.length > 0 && (
          <Button
            size="xs"
            colorScheme="purple"
            ml={4}
            onClick={clearSelectedContacts}
          >
            Unselect all
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default ContactsHeader;
