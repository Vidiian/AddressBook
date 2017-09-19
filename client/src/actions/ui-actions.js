import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';

import actions from '../constants/actionConstants';
import requestActions from './data-request-actions';
import Client from '../network/Client';

const deselectContact = createAction(actions.DESELECT_CONTACT);
const deselectOrganisation = createAction(actions.DESELECT_ORGANISATION);
const hideContactCreator = createAction(actions.HIDE_CONTACT_CREATOR);
const hideContactEditor = createAction(actions.HIDE_CONTACT_EDITOR);
const hideOrganisationCreator = createAction(actions.HIDE_ORGANISATION_CREATOR);
const hideOrganisationEditor = createAction(actions.HIDE_ORGANISATION_EDITOR);
const selectContact = createAction(actions.SELECT_CONTACT);
const selectOrganisation = createAction(actions.SELECT_ORGANISATION);
const showContactCreator = createAction(actions.SHOW_CONTACT_CREATOR);
const showContactEditor = createAction(actions.SHOW_CONTACT_EDITOR);
const showOrganisationCreator = createAction(actions.SHOW_ORGANISATION_CREATOR);
const showOrganisationEditor = createAction(actions.SHOW_ORGANISATION_EDITOR);

const executeContactDeletion = (contactId, thunkWare) => {
  thunkWare.dispatch(deselectContact());
  Client.DELETE(`contact/${contactId}`).then(() => {
    thunkWare.dispatch(requestActions.requestContactList());
  });
};

const executeOrganisationDeletion = (organisationId, thunkWare) => {
  thunkWare.dispatch(deselectOrganisation());
  Client.DELETE(`organisation/${organisationId}`).then(() => {
    thunkWare.dispatch(requestActions.requestContactList()).then(() => {
      thunkWare.dispatch(requestActions.requestOrganisationList());
    });
  });
};

const deleteContact = createActionThunk(actions.DELETE_CONTACT, executeContactDeletion);
const deleteOrganisation = createActionThunk(
  actions.DELETE_ORGANISATION, executeOrganisationDeletion,
);

export default {
  deleteContact,
  deleteOrganisation,
  deselectContact,
  deselectOrganisation,
  hideContactCreator,
  hideContactEditor,
  hideOrganisationCreator,
  hideOrganisationEditor,
  selectContact,
  selectOrganisation,
  showContactCreator,
  showContactEditor,
  showOrganisationCreator,
  showOrganisationEditor
};
