import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AddressBookContainer from './containers/AddressBookContainer';
import reducer from './reducers';

const createApplication = () => {
  const middleware = [thunk];
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */
  const store = createStore(
    reducer, {}, composeEnhancers(applyMiddleware(...middleware)),
  );

  return (
    <Provider store={store}>
      <AddressBookContainer title={'Address Book'} />
    </Provider>
  );
};

export default createApplication;
