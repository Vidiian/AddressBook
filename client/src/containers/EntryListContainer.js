import { connect } from 'react-redux';

import EntryList from '../components/EntryList';
import formActions from '../actions/form-actions';
import uiActions from '../actions/ui-actions';
import selectors from '../selectors';

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  organisations: selectors.getOrganisationList(state),
});

const mapDispatchToProps = dispatch => ({
  organisationSelected: (organisationId) => {
    dispatch(formActions.setContactFormOrganisation(organisationId));
    dispatch(uiActions.selectOrganisation(organisationId));
  },
});

const EntryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryList);

export default EntryListContainer;
