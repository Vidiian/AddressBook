import { handleActions } from 'redux-actions';

import formActions from '../actions/form-actions';

const initialState = {
  contact: {
    forename: '',
    surname: '',
    organisation: '',
    telephone: '',
    email: '',
  },
  organisation: {
    name: '',
    telephone: '',
    email: '',
  },
  isContactValid: false,
  isOrganisationValid: false,
};

const validateContact = contact => !!contact.surname;

const validateOrganisation = organisation => !!organisation.name;

const setContactProperty = (state, newValue) => {
  const newContact = { ...state.contact, ...newValue };
  return { ...state, contact: newContact, isContactValid: validateContact(newContact) };
};

const setOrganisationProperty = (state, newValue) => {
  const newOrganisation = { ...state.organisation, ...newValue };
  return {
    ...state,
    organisation: newOrganisation,
    isOrganisationValid: validateOrganisation(newOrganisation),
  };
};

const clearContactData = state => (
  { ...state, contact: initialState.contact, isContactValid: false }
);

const clearOrganisationData = state => (
  { ...state, organisation: initialState.organisation, isOrganisationValid: false }
);

const reducer = handleActions({
  [formActions.clearContactFormData]: clearContactData,
  [formActions.clearOrganisationFormData]: clearOrganisationData,
  [formActions.setContactFormForename]: (state, action) =>
    setContactProperty(state, { forename: action.payload }),
  [formActions.setContactFormSurname]: (state, action) =>
    setContactProperty(state, { surname: action.payload }),
  [formActions.setContactFormOrganisation]: (state, action) =>
    setContactProperty(state, { organisation: action.payload }),
  [formActions.setContactFormTelephone]: (state, action) =>
    setContactProperty(state, { telephone: action.payload }),
  [formActions.setContactFormEmail]: (state, action) =>
    setContactProperty(state, { email: action.payload }),
  [formActions.setOrganisationFormName]: (state, action) =>
    setOrganisationProperty(state, { name: action.payload }),
  [formActions.setOrganisationFormTelephone]: (state, action) =>
    setOrganisationProperty(state, { telephone: action.payload }),
  [formActions.setOrganisationFormEmail]: (state, action) =>
    setOrganisationProperty(state, { email: action.payload }),
}, initialState);

export default reducer;
