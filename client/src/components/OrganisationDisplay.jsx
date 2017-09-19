import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Modal, Table } from 'react-bootstrap';

import OrganisationFormContainer from '../containers/OrganisationFormContainer';

import './OrganisationDisplay.css';

const OrganisationDisplay = ({
  organisation,
  isEditingOrganisation,
  onEditOrganisation,
  onDeleteOrganisation,
  onHideOrganisationEditor,
  onSaveOrganisationEdits,
}) => (
  /* eslint-disable no-underscore-dangle */
  <div>
    <Table responsive>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{organisation.name}</td>
        </tr>
        <tr>
          <td>Telephone</td>
          <td>{organisation.telephone}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{organisation.email}</td>
        </tr>
      </tbody>
    </Table>
    <ButtonToolbar className="organisation-display__actions">
      <Button bsStyle="primary" onClick={() => onEditOrganisation(organisation)}>
        Edit Organisation
      </Button>
      <Button bsStyle="danger" onClick={() => onDeleteOrganisation(organisation._id)}>
        Delete Organisation
      </Button>
      <Modal show={isEditingOrganisation} bsSize="sm" aria-labelledby="contained-modal-title-lg">
        <Modal.Header onHide={onHideOrganisationEditor} closeButton>
          <Modal.Title id="contained-modal-title-lg">Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrganisationFormContainer />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSaveOrganisationEdits}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </ButtonToolbar>
  </div>
  /* eslint-enable no-underscore-dangle */
);

OrganisationDisplay.defaultProps = {
  organisation: {
    name: '',
    telephone: '',
    email: '',
    _id: '',
  },
};

OrganisationDisplay.propTypes = {
  organisation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    telephone: PropTypes.string,
    email: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }),
  isEditingOrganisation: PropTypes.bool.isRequired,
  onEditOrganisation: PropTypes.func.isRequired,
  onDeleteOrganisation: PropTypes.func.isRequired,
  onHideOrganisationEditor: PropTypes.func.isRequired,
  onSaveOrganisationEdits: PropTypes.func.isRequired,
};

export default OrganisationDisplay;