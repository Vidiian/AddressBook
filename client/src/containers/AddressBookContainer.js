import { connectWithLifecycle } from 'react-lifecycle-component';

import AddressBook from '../components/AddressBook';
import requestActions from '../actions/data-request-actions';
import selectors from '../selectors';

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  userCount: selectors.getContactList(state).length,
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => {
    dispatch(requestActions.requestContactList());
    dispatch(requestActions.requestOrganisationList());
  },
});

const AddressBookContainer = connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBook);

export default AddressBookContainer;
