import { createActionThunk } from 'redux-thunk-actions';

import receiveActions from './data-receive-actions';
import actions from '../constants/actionConstants';
import Client from '../network/Client';

const requestContacts = thunkWare => (
  Client.GET('contacts').then(contactList => (
    thunkWare.dispatch(receiveActions.receiveContactList(contactList))
  ))
);

const requestOrganisations = thunkWare => (
  Client.GET('organisations').then(organisationList => (
    thunkWare.dispatch(receiveActions.receiveOrganisationList(organisationList))
  ))
);

const requestContactList = createActionThunk(actions.GET_CONTACT_LIST, requestContacts);
const requestOrganisationList = createActionThunk(
  actions.GET_ORGANISATION_LIST,
  requestOrganisations,
);

export default {
  requestContactList,
  requestOrganisationList,
};
