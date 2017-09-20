import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

import EntryListContainer from '../containers/EntryListContainer';
import DisplaySectionContainer from '../containers/DisplaySectionContainer';
import RecordCreatorContainer from '../containers/RecordCreatorContainer';

import './AddressBook.css';

const AddressBook = ({
  title, userCount,
}) => (
  <div className="address-book">
    <Jumbotron className="address-book__header">
      <h1>{title} Demo</h1>
      <p>Manage your contacts and their organisations here, storing your data for later use.</p>
    </Jumbotron>
    <Grid>
      <Row>
        <Col lg={6} md={6}>
          <EntryListContainer />
        </Col>
        <Col lg={6} md={6}>
          <DisplaySectionContainer />
        </Col>
      </Row>
    </Grid>
    <RecordCreatorContainer />
    <p className="App-intro">
      You have {userCount} contacts
    </p>
  </div>
);

AddressBook.propTypes = {
  title: PropTypes.string.isRequired,
  userCount: PropTypes.number.isRequired,
};

export default AddressBook;
