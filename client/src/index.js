import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import createApplication from './main';

import './index.css';

const AddressBook = createApplication();

ReactDOM.render(
  AddressBook,
  document.getElementById('root'),
);
registerServiceWorker();
