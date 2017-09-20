import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import OrganisationDisplayContainer from '../containers/OrganisationDisplayContainer';
import ContactDisplayContainer from '../containers/ContactDisplayContainer';
import uiConstants from '../constants/uiConstants';

import './DisplaySection.css';

const DisplaySection = ({
  displayOption,
}) => (
  <Panel className="display-section">
    {displayOption === uiConstants.DISPLAY_ORGANISATION &&
      <OrganisationDisplayContainer />
    }
    {displayOption === uiConstants.DISPLAY_CONTACT &&
      <ContactDisplayContainer />
    }
    {displayOption === uiConstants.DISPLAY_NONE &&
      <h1>Select a contact or organisation</h1>
    }
  </Panel>
);

DisplaySection.propTypes = {
  displayOption: PropTypes.string.isRequired,
};

export default DisplaySection;

