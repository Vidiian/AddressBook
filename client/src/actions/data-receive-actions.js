import { createAction } from 'redux-actions';

import actions from '../constants/actionConstants';

const receiveOrganisationData = createAction(actions.RECEIVE_ORGANISATION_DATA);
const receiveOrganisationList = createAction(actions.RECEIVE_ORGANISATION_LIST);
const receiveContactData = createAction(actions.RECEIVE_CONTACT_DATA);
const receiveContactList = createAction(actions.RECEIVE_CONTACT_LIST);

export default {
  receiveOrganisationData,
  receiveOrganisationList,
  receiveContactData,
  receiveContactList,
};
