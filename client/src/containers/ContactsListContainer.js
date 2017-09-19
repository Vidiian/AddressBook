import { connect } from 'react-redux';

import ContactsList from '../components/ContactsList';
import uiActions from '../actions/ui-actions';
import formActions from '../actions/form-actions';
import selectors from '../selectors';

const mapStateToProps = (state, ownProps) => ({
  organisationId: ownProps.organisationId,
  contacts: selectors.getOrganisationContacts(state, ownProps.organisationId),
});

const mapDispatchToProps = dispatch => ({
  onClick: (contact) => {
    /* eslint-disable no-underscore-dangle */
    dispatch(formActions.setContactFormOrganisation(contact.organisation));
    dispatch(uiActions.selectContact(contact._id));
    /* eslint-ensable no-underscore-dangle */
  },
});

const ContactsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);

export default ContactsListContainer;
