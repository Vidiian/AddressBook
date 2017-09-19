import { handleActions } from 'redux-actions';

import receiveActions from '../actions/data-receive-actions';
import requestActions from '../actions/data-request-actions';
import uiActions from '../actions/ui-actions';

const initialState = {
  listing: [],
  isLoading: false,
  selectedContact: null,
};

const processContactList = (state = initialState, action) => {
  const props = {
    listing: action.payload,
    isLoading: false,
  };
  return { ...state, ...props };
};

const logRequestStart = (state = initialState) => (
  { ...state, isLoading: true }
);

const setSelectedContact = (state = initialState, action) => {
  /* eslint-disable no-underscore-dangle */
  const matches = state.listing.filter(option => option._id === action.payload);
  /* eslint-enable no-underscore-dangle */
  const selected = matches.length > 0 ? matches[0] : state.selectedContact;
  return { ...state, selectedContact: selected };
};

const deselectContact = state => (
  { ...state, selectedContact: null }
);

const reducer = handleActions({
  [receiveActions.receiveContactList]: processContactList,
  [requestActions.requestContactList.START]: logRequestStart,
  [uiActions.selectContact]: setSelectedContact,
  [uiActions.deselectContact]: deselectContact,
}, initialState);

export default reducer;
