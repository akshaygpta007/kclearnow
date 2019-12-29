import { combineReducers } from 'redux';
import movies from '../screens/home/reducer';
import myContent from '../screens/my-content/reducer';

export default combineReducers({
  movies,
  myContent,
});
