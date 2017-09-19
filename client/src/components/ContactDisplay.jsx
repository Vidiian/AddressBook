import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Modal, Table } from 'react-bootstrap';

import ContactFormContainer from '../containers/ContactFormContainer';

import './ContactDisplay.css';

const ContactDisplay = ({
  displayContact,
  isEditingContact,
  organisationName,
  onEditContact,
  onDeleteContact,
  onHideContactEditor,
  onSaveContactsEdits,
}) => (
  /* eslint-disable no-underscore-dangle */
  <div>
    <Table responsive>
      <tbody>
        <tr>
          <td>Forename</td>
          <td>{displayContact.forename}</td>
        </tr>
        <tr>
          <td>Surname</td>
          <td>{displayContact.surname}</td>
        </tr>
        <tr>
          <td>Organisation</td>
          <td>{organisationName}</td>
        </tr>
        <tr>
          <td>Telephone</td>
          <td>{displayContact.telephone}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{displayContact.email}</td>
        </tr>
      </tbody>
    </Table>
    <ButtonToolbar className="contact-display__actions">
      <Button bsStyle="primary" onClick={() => onEditContact(displayContact)}>Edit Contact</Button>
      <Button bsStyle="danger" onClick={() => onDeleteContact(displayContact._id)}>
        Delete Contact
      </Button>
      <Modal show={isEditingContact} bsSize="sm" aria-labelledby="contained-modal-title-lg">
        <Modal.Header onHide={onHideContactEditor} closeButton>
          <Modal.Title id="contained-modal-title-lg">Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactFormContainer />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSaveContactsEdits}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </ButtonToolbar>
  </div>
  /* eslint-enable no-underscore-dangle */
);

ContactDisplay.defaultProps = {
  displayContact: {
    forename: '',
    telephone: '',
    email: '',
  },
  organisationName: '',
};

ContactDisplay.propTypes = {
  displayContact: PropTypes.shape({
    forename: PropTypes.string,
    surname: PropTypes.string.isRequired,
    telephone: PropTypes.string,
    email: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }),
  organisationName: PropTypes.string,
  isEditingContact: PropTypes.bool.isRequired,
  onEditContact: PropTypes.bool.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onHideContactEditor: PropTypes.func.isRequired,
  onSaveContactsEdits: PropTypes.func.isRequired,
};

export default ContactDisplay;