import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import member from './member'

const rootReducer = combineReducers({
  routing,
  member,
});

export default rootReducer;
