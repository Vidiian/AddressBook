import { connect } from 'react-redux';

import ContactDisplay from '../components/ContactDisplay';
import formActions from '../actions/form-actions';
import uiActions from '../actions/ui-actions';
import selectors from '../selectors';

const mapStateToProps = (state) => {
  const contact = selectors.getSelectedContact(state);
  const props = {
    displayContact: contact,
    isEditingContact: selectors.isEditingContact(state),
  };
  if (contact.organisation) {
    const contactOrganisation = selectors.getOrganisation(state, contact.organisation);
    props.organisationName = contactOrganisation.name;
  }
  return { ...props  };
};

const mapDispatchToProps = dispatch => ({
  onEditContact: (contact) => {
    dispatch(formActions.setContactFormSurname(contact.surname));
    if (contact.organisation) {
      dispatch(formActions.setContactFormOrganisation(contact.organisation));
    }
    if (contact.forename) dispatch(formActions.setContactFormForename(contact.forename));
    if (contact.telephone) dispatch(formActions.setContactFormTelephone(contact.telephone));
    if (contact.email) dispatch(formActions.setContactFormEmail(contact.email));
    dispatch(uiActions.showContactEditor());
  },
  onDeleteContact: contactId => (
    dispatch(uiActions.deleteContact(contactId))
  ),
  onHideContactEditor: () => {
    dispatch(uiActions.hideContactEditor());
    dispatch(formActions.clearContactFormData());
  },
  onSaveContactsEdits: () => {
    dispatch(formActions.submitContactEdit());
  },
});

const ContactDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDisplay);

export default ContactDisplayContainer;
