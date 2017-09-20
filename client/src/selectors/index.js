const getContactFormForename = state => state.formData.contact.forename;
const getContactFormSurname = state => state.formData.contact.surname;
const getContactFormOrganisation = state => state.formData.contact.organisation;
const getContactFormTelephone = state => state.formData.contact.telephone;
const getContactFormEmail = state => state.formData.contact.email;
const getOrganisationFormName = state => state.formData.organisation.name;
const getOrganisationFormTelephone = state => state.formData.organisation.telephone;
const getOrganisationFormEmail = state => state.formData.organisation.email;
const isFormContactValid = state => state.formData.isContactValid;
const isFormOrganisationValid = state => state.formData.isOrganisationValid;
const getContactList = state => state.contacts.listing;
const getContactsLoading = state => state.contacts.isLoading;
const getOrganisationList = state => state.organisations.listing;
const getOrganisationLoading = state => state.organisations.isLoading;
const getSelectedContact = state => state.contacts.selectedContact;
const getSelectedOrganisation = state => state.organisations.selectedOrganisation;
const getSelectedDisplayType = state => state.ui.selectionType;
const isCreatingContact = state => state.ui.isCreatingContact;
const isCreatingOrganisation = state => state.ui.isCreatingOrganisation;
const isEditingContact = state => state.ui.isEditingContact;
const isEditingOrganisation = state => state.ui.isEditingOrganisation;

/* eslint-disable no-underscore-dangle */
const getContact = (state, _id) => {
  const matches = getContactList(state).filter(contact => contact._id === _id);
  return matches.length > 0 ? matches[0] : null;
};
const getOrganisation = (state, _id) => {
  const matches = getOrganisationList(state).filter(organisation => organisation._id === _id);
  return matches.length > 0 ? matches[0] : null;
};
/* eslint-enable no-underscore-dangle */
const getOrganisationContacts = (state, organisationId) => (
  getContactList(state).filter(contact => contact.organisation === organisationId)
);
const isAbleToAddContacts = (state) => getOrganisationList(state).length > 0;

export default {
  getContact,
  getContactFormForename,
  getContactFormSurname,
  getContactFormOrganisation,
  getContactFormTelephone,
  getContactFormEmail,
  getContactList,
  getContactsLoading,
  getOrganisation,
  getOrganisationContacts,
  getOrganisationFormName,
  getOrganisationFormTelephone,
  getOrganisationFormEmail,
  getOrganisationList,
  getOrganisationLoading,
  getSelectedContact,
  getSelectedDisplayType,
  getSelectedOrganisation,
  isAbleToAddContacts,
  isCreatingContact,
  isCreatingOrganisation,
  isEditingContact,
  isEditingOrganisation,
  isFormContactValid,
  isFormOrganisationValid,
};
