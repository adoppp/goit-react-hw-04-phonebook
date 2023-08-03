import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem/ContatcItem';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <div>
      {contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        ).map(contact => {
          const { id } = contact;
          return (
            <ContactItem
              key={id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </div>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
