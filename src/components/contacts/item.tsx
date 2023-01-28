import React from "react";
import { Box, Checkbox, Flex, Image } from "@chakra-ui/react";
import { Contact } from "store/contacts";

type Props = {
  contact: Contact;
  toggleContact: (id: number) => void;
  isSelected: boolean;
};
const ContactItem = ({ contact, toggleContact, isSelected }: Props) => {
  return (
    <Flex
      flex={1}
      mb={2}
      onClick={() => {
        toggleContact(contact.id);
      }}
      _hover={{
        backgroundColor: "cyan.200",
      }}
      cursor="pointer"
      w="full"
      backgroundColor={isSelected ? "cyan.200" : "white"}
      py={2}
      px={4}
      borderRadius="lg"
      boxShadow="base"
      align="center"
      justify="space-between"
    >
      <Flex>
        <Image
          boxSize={12}
          borderRadius="full"
          src={
            contact.avatar !== null
              ? contact.avatar
              : "/contacts/avatar_placeholder.png"
          }
          alt={`${contact.first_name} ${contact.last_name}`}
        />
        <Flex ml={4} flexDir="column" overflow="hidden">
          <Box
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >{`${contact.first_name} ${contact.last_name}`}</Box>
          <Box
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            color="gray.600"
            fontSize={12}
          >{`${contact.email}`}</Box>
        </Flex>
      </Flex>
      <Checkbox isChecked={isSelected} pointerEvents="none" />
    </Flex>
  );
};

export default ContactItem;
