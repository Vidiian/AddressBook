import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import ContactFormContainer from '../containers/ContactFormContainer';
import OrganisationFormContainer from '../containers/OrganisationFormContainer';

import './RecordCreator.css';

const RecordCreator = ({
  isCreatingContact,
  isCreatingOrganisation,
  isContactValid,
  isOrganisationValid,
  onShowContactCreator,
  onShowOrganisationCreator,
  onSubmitContactForm,
  onSubmitOrganisationForm,
  onHideContactCreator,
  onHideOrganisationCreator,
}) => (
  <ButtonToolbar className={'address-book__record-creator'}>
    <Button onClick={onShowContactCreator} bsStyle="primary">Add Contact</Button>
    <Button onClick={onShowOrganisationCreator} bsStyle="primary">Add Organisation</Button>
    <Modal show={isCreatingContact} bsSize="sm" aria-labelledby="contained-modal-title-lg">
      <Modal.Header onHide={onHideContactCreator} closeButton>
        <Modal.Title id="contained-modal-title-lg">Create a Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactFormContainer />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmitContactForm} disabled={!isContactValid}>Submit</Button>
      </Modal.Footer>
    </Modal>
    <Modal show={isCreatingOrganisation} bsSize="sm" aria-labelledby="contained-modal-title-lg">
      <Modal.Header onHide={onHideOrganisationCreator} closeButton>
        <Modal.Title id="contained-modal-title-lg">Create an Organisation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OrganisationFormContainer />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmitOrganisationForm} disabled={!isOrganisationValid}>
          Create an Organisation
        </Button>
      </Modal.Footer>
    </Modal>
  </ButtonToolbar>
);

RecordCreator.propTypes = {
  isContactValid: PropTypes.bool.isRequired,
  isCreatingContact: PropTypes.bool.isRequired,
  isCreatingOrganisation: PropTypes.bool.isRequired,
  isOrganisationValid: PropTypes.bool.isRequired,
  onShowContactCreator: PropTypes.func.isRequired,
  onSubmitContactForm: PropTypes.func.isRequired,
  onSubmitOrganisationForm: PropTypes.func.isRequired,
  onShowOrganisationCreator: PropTypes.func.isRequired,
  onHideContactCreator: PropTypes.func.isRequired,
  onHideOrganisationCreator: PropTypes.func.isRequired,
};

export default RecordCreator
