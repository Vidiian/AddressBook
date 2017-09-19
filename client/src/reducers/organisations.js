import { handleActions } from 'redux-actions';

import receiveActions from '../actions/data-receive-actions';
import requestActions from '../actions/data-request-actions';
import uiActions from '../actions/ui-actions';

const initialState = {
  listing: [],
  isLoading: false,
  selectedOrganisation: null,
};

const processOrganisationtList = (state = initialState, action) => {
  const props = {
    listing: action.payload,
    isLoading: false,
    selectedOrganisation: action.payload.length > 0 ? action.payload[0] : null,
  };
  return { ...state, ...props };
};

const setSelectedOrganisation = (state = initialState, action) => {
  /* eslint-disable no-underscore-dangle */
  const matches = state.listing.filter(option => option._id === action.payload);
  /* eslint-enable no-underscore-dangle */
  const selected = matches.length > 0 ? matches[0] : state.selectedOrganisation;
  return { ...state, selectedOrganisation: selected };
};

const logRequestStart = (state = initialState) => (
  { ...state, isLoading: true }
);

const deselectOrganisation = state => (
  { ...state, selectedOrganisation: null }
);

const reducer = handleActions({
  [receiveActions.receiveOrganisationList]: processOrganisationtList,
  [requestActions.requestOrganisationList.START]: logRequestStart,
  [uiActions.selectOrganisation]: setSelectedOrganisation,
  [uiActions.deselectOrganisation]: deselectOrganisation,
}, initialState);

export default reducer;
