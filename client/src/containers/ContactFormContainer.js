import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import formActions from '../actions/form-actions';
import selectors from '../selectors';

const getSurnameValidation = (entry) => {
  const length = entry.length;
  if (length > 0) return 'success';
  return 'error';
};

const mapStateToProps = (state) => ({
  forename: selectors.getContactFormForename(state),
  surname: selectors.getContactFormSurname(state),
  organisations: selectors.getOrganisationList(state),
  selectedOrganisationId: selectors.getContactFormOrganisation(state),
  telephone: selectors.getContactFormTelephone(state),
  email: selectors.getContactFormEmail(state),
  validSurname: getSurnameValidation(selectors.getContactFormSurname(state)),
});

const mapDispatchToProps = dispatch => ({
  changeForename: (event) => {
    dispatch(formActions.setContactFormForename(event.target.value || ''));
  },
  changeSurname: (event) => {
    dispatch(formActions.setContactFormSurname(event.target.value || ''));
  },
  changeOrganisation: (event) => {
    dispatch(formActions.setContactFormOrganisation(event.target.value || ''));
  },
  changeTelephone: (event) => {
    dispatch(formActions.setContactFormTelephone(event.target.value || ''));
  },
  changeEmail: (event) => {
    dispatch(formActions.setContactFormEmail(event.target.value || ''));
  },
});

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);

export default ContactFormContainer;
