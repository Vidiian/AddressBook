import { connect } from 'react-redux';

import RecordCreator from '../components/RecordCreator';
import uiActions from '../actions/ui-actions';
import formActions from '../actions/form-actions';
import selectors from '../selectors';

const mapStateToProps = state => ({
  isContactValid: selectors.isFormContactValid(state),
  isCreatingContact: selectors.isCreatingContact(state),
  isCreatingOrganisation: selectors.isCreatingOrganisation(state),
  isOrganisationValid: selectors.isFormOrganisationValid(state),
});

const mapDispatchToProps = dispatch => ({
  onShowContactCreator: () => (
    dispatch(uiActions.showContactCreator())
  ),
  onHideContactCreator: () => (
    dispatch(uiActions.hideContactCreator())
  ),
  onSubmitContactForm: () => (
    dispatch(formActions.submitContactForm())
  ),
  onSubmitOrganisationForm: () => (
    dispatch(formActions.submitOrganisationForm())
  ),
  onShowOrganisationCreator: () => (
    dispatch(uiActions.showOrganisationCreator())
  ),
  onHideOrganisationCreator: () => (
    dispatch(uiActions.hideOrganisationCreator())
  ),
});

const OrganisationDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordCreator);

export default OrganisationDisplayContainer;
