import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const OrgansiationForm = ({
  changeName,
  name,
  validName,
  changeTelephone,
  telephone,
  changeEmail,
  email,
}) => (
  <form>
    <FormGroup
      controlId="organisationName"
      validationState={validName}
    >
      <ControlLabel>Name (required)</ControlLabel>
      <FormControl
        type="text"
        value={name}
        placeholder="Enter name here"
        onChange={changeName}
      />
      <FormControl.Feedback />
    </FormGroup>
    <FormGroup controlId="organisationTelephone">
      <ControlLabel>Telephone</ControlLabel>
      <FormControl
        type="text"
        value={telephone}
        placeholder="Enter telephone here"
        onChange={changeTelephone}
      />
    </FormGroup>
    <FormGroup controlId="organisationEmail">
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

OrgansiationForm.propTypes = {
  validName: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  changeTelephone: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default OrgansiationForm;
