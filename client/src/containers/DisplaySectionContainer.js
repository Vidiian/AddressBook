import { connect } from 'react-redux';

import DisplaySection from '../components/DisplaySection';
import selectors from '../selectors';

const mapStateToProps = state => (
  { displayOption: selectors.getSelectedDisplayType(state) }
);

const mapDispatchToProps = () => ({});

const OrganisationDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplaySection);

export default OrganisationDisplayContainer;
