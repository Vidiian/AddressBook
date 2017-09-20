import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';

import actions from '../constants/actionConstants';
import uiActions from './ui-actions';
import formActions from './form-actions';
import requestActions from './data-request-actions';
import Client from '../network/Client';
import selectors from '../selectors';

const clearContactFormData = createAction(actions.CLEAR_CONTACT_FORM_DATA);
const clearOrganisationFormData = createAction(actions.CLEAR_ORGANISATION_FORM_DATA);
const setContactFormForename = createAction(actions.SET_CONTACT_FORM_FORENAME);
const setContactFormSurname = createAction(actions.SET_CONTACT_FORM_SURNAME);
const setContactFormOrganisation = createAction(actions.SET_CONTACT_FORM_ORGANISATION);
const setContactFormTelephone = createAction(actions.SET_CONTACT_FORM_TELEPHONE);
const setContactFormEmail = createAction(actions.SET_CONTACT_FORM_EMAIL);
const setOrganisationFormName = createAction(actions.SET_ORGANISATION_FORM_NAME);
const setOrganisationFormTelephone = createAction(actions.SET_ORGANISATION_FORM_TELEPHONE);
const setOrganisationFormEmail = createAction(actions.SET_ORGANISATION_FORM_EMAIL);

const setDefault = (thunkWare) => {
  const state = thunkWare.getState();
  const existingId = selectors.getContactFormOrganisation(state);
  if (!existingId) {
    /* eslint-disable no-underscore-dangle */
    const defaultId = selectors.getOrganisationList(state)[0]._id;
    thunkWare.dispatch(formActions.setContactFormOrganisation(defaultId));
    /* eslint-enble no-underscore-dangle */
  }
  return Promise.resolve();
};

const setDefaultContactFormOrganisation = createActionThunk(
  actions.SET_DEFAULT_CONTACT_FORM_ORGANISATION,
  setDefault,
);

const getFormContactData = state => ({
  forename: selectors.getContactFormForename(state),
  surname: selectors.getContactFormSurname(state),
  organisation: selectors.getContactFormOrganisation(state),
  telephone: selectors.getContactFormTelephone(state),
  email: selectors.getContactFormEmail(state),
});

const editContact = (thunkWare) => {
  const state = thunkWare.getState();
  /* eslint-disable no-underscore-dangle */
  const contactId = selectors.getSelectedContact(state)._id;
  const contactData = getFormContactData(state);
  Client.PUT(`contact/${contactId}`, contactData).then(() => {
    thunkWare.dispatch(uiActions.hideContactEditor());
    thunkWare.dispatch(clearContactFormData());
    thunkWare.dispatch(requestActions.requestContactList()).then(() => {
      thunkWare.dispatch(uiActions.selectContact(contactId));
    });
  });
  /* eslint-enable no-underscore-dangle */
};

const submitContact = (thunkWare) => {
  const state = thunkWare.getState();
  const contactData = getFormContactData(state);
  Client.POST('contact', contactData).then(() => {
    thunkWare.dispatch(uiActions.hideContactCreator());
    thunkWare.dispatch(clearContactFormData());
    thunkWare.dispatch(requestActions.requestContactList());
  });
};

const submitContactEdit = createActionThunk(actions.SUBMIT_CONTACT_EDIT, editContact);
const submitContactForm = createActionThunk(actions.SUBMIT_CONTACT_FORM, submitContact);

const getOrganisationFormData = state => ({
  name: selectors.getOrganisationFormName(state),
  telephone: selectors.getOrganisationFormTelephone(state),
  email: selectors.getOrganisationFormEmail(state),
});

const editOrganisation = (thunkWare) => {
  const state = thunkWare.getState();
  /* eslint-disable no-underscore-dangle */
  const organisationId = selectors.getSelectedOrganisation(state)._id;
  const organisationData = getOrganisationFormData(state);
  Client.PUT(`organisation/${organisationId}`, organisationData).then(() => {
    thunkWare.dispatch(uiActions.hideOrganisationEditor());
    thunkWare.dispatch(clearOrganisationFormData());
    thunkWare.dispatch(requestActions.requestOrganisationList()).then(() => {
      thunkWare.dispatch(uiActions.selectOrganisation(organisationId));
    });
  });
  /* eslint-enable no-underscore-dangle */
};

const submitOrganisation = (thunkWare) => {
  const state = thunkWare.getState();
  const organisationData = getOrganisationFormData(state);
  Client.POST('organisation', organisationData).then(() => {
    thunkWare.dispatch(uiActions.hideOrganisationCreator());
    thunkWare.dispatch(clearOrganisationFormData());
    thunkWare.dispatch(requestActions.requestOrganisationList());
  });
};
const submitOrganisationEdit = createActionThunk(
  actions.SUBMIT_ORGANISATION_EDIT, editOrganisation,
);
const submitOrganisationForm = createActionThunk(
  actions.SUBMIT_ORGANISATION_FORM, submitOrganisation,
);

export default {
  clearContactFormData,
  clearOrganisationFormData,
  setContactFormForename,
  setContactFormSurname,
  setContactFormOrganisation,
  setContactFormTelephone,
  setContactFormEmail,
  setDefaultContactFormOrganisation,
  setOrganisationFormName,
  setOrganisationFormTelephone,
  setOrganisationFormEmail,
  submitContactEdit,
  submitContactForm,
  submitOrganisationEdit,
  submitOrganisationForm,
};
