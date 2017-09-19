import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const ContactForm = ({
  changeForename,
  forename,
  changeSurname,
  surname,
  validSurname,
  changeOrganisation,
  organisations,
  selectedOrganisationId,
  changeTelephone,
  telephone,
  changeEmail,
  email,
}) => (
  <form>
    <FormGroup controlId="contactForename">
      <ControlLabel>Forename</ControlLabel>
      <FormControl
        type="text"
        value={forename}
        placeholder="Enter forename here"
        onChange={changeForename}
      />
    </FormGroup>
    <FormGroup
      controlId="contactSurname"
      validationState={validSurname}
    >
      <ControlLabel>Surname (required)</ControlLabel>
      <FormControl
        type="text"
        value={surname}
        placeholder="Enter surname here"
        onChange={changeSurname}
      />
      <FormControl.Feedback />
    </FormGroup>
    <FormGroup controlId="contactOrganisation">
      <ControlLabel>Organisation</ControlLabel>
      <FormControl
        componentClass="select"
        placeholder="select"
        value={selectedOrganisationId}
        onChange={changeOrganisation}
      >
        {organisations.map(organisation =>
          /* eslint-disable no-underscore-dangle */
          (<option key={organisation._id} value={organisation._id}>
            {organisation.name}
          </option>),
          /* eslint-enable no-underscore-dangle */
        )}
      </FormControl>
    </FormGroup>
    <FormGroup controlId="contactTelephone">
      <ControlLabel>Telephone</ControlLabel>
      <FormControl
        type="text"
        value={telephone}
        placeholder="Enter telephone here"
        onChange={changeTelephone}
      />
    </FormGroup>
    <FormGroup controlId="contactEmail">
      <ControlLabel>Email</ControlLabel>
      <FormControl
        type="email"
        value={email}
        placeholder="Enter email here"
        onChange={changeEmail}
      />
    </FormGroup>
  </form>
);

ContactForm.defaultProps = {
  organisations: [],
  selectedOrganisationId: '',
};

ContactForm.propTypes = {
  validSurname: PropTypes.string.isRequired,
  changeForename: PropTypes.func.isRequired,
  changeSurname: PropTypes.func.isRequired,
  changeOrganisation: PropTypes.func.isRequired,
  changeTelephone: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  forename: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  organisations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ),
  selectedOrganisationId: PropTypes.string,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactForm;
