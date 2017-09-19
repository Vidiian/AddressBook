import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Panel } from 'react-bootstrap';

import ContactsListContainer from '../containers/ContactsListContainer';

// import './EntryList.css';

const EntryList = ({
  organisations, organisationSelected,
}) => (
  <Accordion>
    {organisations.map((organisation, index) =>
      /* eslint-disable no-underscore-dangle */
      (<Panel
        collapsible
        header={organisation.name}
        eventKey={index}
        id={organisation._id}
        onSelect={() => organisationSelected(organisation._id)}
        key={organisation._id}
      >
        <ContactsListContainer organisationId={organisation._id} />
      </Panel>),
      /* eslint-enable no-underscore-dangle */
    )}
  </Accordion>
);

EntryList.defaultProps = {
  organisations: [],
};

EntryList.propTypes = {
  organisations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ),
  organisationSelected: PropTypes.func.isRequired,
};

export default EntryList;
