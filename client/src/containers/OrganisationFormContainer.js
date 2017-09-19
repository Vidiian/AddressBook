import { connect } from 'react-redux';

import OrganisationForm from '../components/OrganisationForm';
import formActions from '../actions/form-actions';
import selectors from '../selectors';

const getNameValidation = (entry) => {
  const length = entry.length;
  if (length > 0) return 'success';
  return 'error';
};

const mapStateToProps = state => ({
  name: selectors.getOrganisationFormName(state),
  telephone: selectors.getOrganisationFormTelephone(state),
  email: selectors.getOrganisationFormEmail(state),
  validName: getNameValidation(selectors.getOrganisationFormName(state)),
});

const mapDispatchToProps = dispatch => ({
  changeName: (event) => {
    dispatch(formActions.setOrganisationFormName(event.target.value || ''));
  },
  changeTelephone: (event) => {
    dispatch(formActions.setOrganisationFormTelephone(event.target.value || ''));
  },
  changeEmail: (event) => {
    dispatch(formActions.setOrganisationFormEmail(event.target.value || ''));
  },
});

const OrganisationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationForm);

export default OrganisationFormContainer;
