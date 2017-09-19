import { combineReducers } from 'redux';

import contacts from './contacts';
import formData from './formData';
import organisations from './organisations';
import ui from './ui';

export default combineReducers({
  contacts,
  formData,
  organisations,
  ui,
});
