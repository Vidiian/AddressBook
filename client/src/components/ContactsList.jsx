import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

// import './EntryList.css';

const ContactsList = ({
  contacts, onClick,
}) => (
  <ListGroup>
    {contacts.map(contact =>
      /* eslint-disable no-underscore-dangle */
      (<ListGroupItem
        key={contact._id}
        onClick={() => onClick(contact)}
      >
        {[contact.forename, contact.surname].join(' ')}
      </ListGroupItem>),
      /* eslint-enable no-underscore-dangle */
    )}
  </ListGroup>
);

ContactsList.defaultProps = {
  contacts: [],
  telephone: '',
  email: '',
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      forename: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      telephone: PropTypes.string,
      email: PropTypes.string,
      _id: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

export default ContactsList;
