import { handleActions } from 'redux-actions';

import uiActions from '../actions/ui-actions';
import uiConstants from '../constants/uiConstants';

const initialState = {
  selectionType: uiConstants.DISPLAY_NONE,
  isCreatingContact: false,
  isCreatingOrganisation: false,
  isEditingContact: false,
  isEditingOrganisation: false,
};

const setContactDeselection = (state = initialState) => (
  { ...state, selectionType: uiConstants.DISPLAY_NONE }
);

const setContactSelection = (state = initialState) => (
  { ...state, selectionType: uiConstants.DISPLAY_CONTACT }
);

const setOrganisationDeselection = (state = initialState) => (
  { ...state, selectionType: uiConstants.DISPLAY_NONE }
);

const setOrganisationSelection = (state = initialState) => (
  { ...state, selectionType: uiConstants.DISPLAY_ORGANISATION }
);

const setContactCreating = (state = initialState, isCreating) => (
  { ...state, isCreatingContact: isCreating }
);

const setContactEditing = (state = initialState, isEditing) => (
  { ...state, isEditingContact: isEditing }
);

const setOrganisationCreating = (state = initialState, isCreating) => (
  { ...state, isCreatingOrganisation: isCreating }
);

const setOrganisationEditing = (state = initialState, isEditing) => (
  { ...state, isEditingOrganisation: isEditing }
);

const reducer = handleActions({
  [uiActions.deleteContact.SUCCEEDED]: setContactDeselection,
  [uiActions.deselectContact]: setContactDeselection,
  [uiActions.deselectOrganisation]: setOrganisationDeselection,
  [uiActions.selectContact]: setContactSelection,
  [uiActions.selectOrganisation]: setOrganisationSelection,
  [uiActions.showContactCreator]: state => setContactCreating(state, true),
  [uiActions.showContactEditor]: state => setContactEditing(state, true),
  [uiActions.showOrganisationCreator]: state => setOrganisationCreating(state, true),
  [uiActions.showOrganisationEditor]: state => setOrganisationEditing(state, true),
  [uiActions.hideContactCreator]: state => setContactCreating(state, false),
  [uiActions.hideContactEditor]: state => setContactEditing(state, false),
  [uiActions.hideOrganisationCreator]: state => setOrganisationCreating(state, false),
  [uiActions.hideOrganisationEditor]: state => setOrganisationEditing(state, false),
}, initialState);

export default reducer;
