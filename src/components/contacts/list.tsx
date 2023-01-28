import { Virtuoso } from "react-virtuoso";
import ContactItem from "components/contacts/item";
import { Contact } from "store/contacts";

type Props = {
  filteredContacts: Contact[];
  toggleContact: (id: number) => void;
  selectedContacts: number[];
};

const ContactsList = ({
  filteredContacts,
  toggleContact,
  selectedContacts,
}: Props) => {
  return (
    <Virtuoso
      data={filteredContacts}
      style={{
        paddingBottom: "10px",
      }}
      useWindowScroll
      itemContent={(index, contact) => (
        <ContactItem
          key={contact.id}
          toggleContact={toggleContact}
          contact={contact}
          isSelected={selectedContacts.includes(contact.id)}
        />
      )}
    />
  );
};

export default ContactsList;
