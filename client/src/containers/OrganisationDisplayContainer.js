import { connect } from 'react-redux';

import OrganisationDisplay from '../components/OrganisationDisplay';
import formActions from '../actions/form-actions';
import uiActions from '../actions/ui-actions';
import selectors from '../selectors';

const mapStateToProps = state => ({
  organisation: selectors.getSelectedOrganisation(state),
  isEditingOrganisation: selectors.isEditingOrganisation(state),
});

const mapDispatchToProps = dispatch => ({
  onEditOrganisation: (organisation) => {
    dispatch(formActions.setOrganisationFormName(organisation.name));
    if (organisation.telephone) {
      dispatch(formActions.setOrganisationFormTelephone(organisation.telephone));
    }
    if (organisation.email) dispatch(formActions.setOrganisationFormEmail(organisation.email));
    dispatch(uiActions.showOrganisationEditor());
  },
  onDeleteOrganisation: contactId => (
    dispatch(uiActions.deleteOrganisation(contactId))
  ),
  onHideOrganisationEditor: () => {
    dispatch(uiActions.hideOrganisationEditor());
    dispatch(formActions.clearOrganisationFormData());
  },
  onSaveOrganisationEdits: () => {
    dispatch(formActions.submitOrganisationEdit());
  },
});

const OrganisationDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationDisplay);

export default OrganisationDisplayContainer;
