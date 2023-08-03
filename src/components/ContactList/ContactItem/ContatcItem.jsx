import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <div>
      <span>{name}</span>
      <span> {number}</span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
  );
};


ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};