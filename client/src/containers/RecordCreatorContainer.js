import { connect } from 'react-redux';

import RecordCreator from '../components/RecordCreator';
import uiActions from '../actions/ui-actions';
import formActions from '../actions/form-actions';
import selectors from '../selectors';

const mapStateToProps = state => ({
  isAbleToAddContacts: selectors.isAbleToAddContacts(state),
  isContactValid: selectors.isFormContactValid(state),
  isCreatingContact: selectors.isCreatingContact(state),
  isCreatingOrganisation: selectors.isCreatingOrganisation(state),
  isOrganisationValid: selectors.isFormOrganisationValid(state),
});

const mapDispatchToProps = dispatch => ({
  onShowContactCreator: () => {
    dispatch(formActions.setDefaultContactFormOrganisation()).then(() =>
      dispatch(uiActions.showContactCreator()),
    );
  },
  onHideContactCreator: () => {
    dispatch(uiActions.hideContactCreator());
    dispatch(formActions.clearContactFormData());
  },
  onSubmitContactForm: () => {
    dispatch(formActions.submitContactForm());
    dispatch(formActions.clearContactFormData());
  },
  onSubmitOrganisationForm: () => {
    dispatch(formActions.submitOrganisationForm());
    dispatch(formActions.clearContactFormData());
  },
  onShowOrganisationCreator: () => (
    dispatch(uiActions.showOrganisationCreator())
  ),
  onHideOrganisationCreator: () => {
    dispatch(uiActions.hideOrganisationCreator());
    dispatch(formActions.clearContactFormData());
  },
});

const OrganisationDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordCreator);

export default OrganisationDisplayContainer;
