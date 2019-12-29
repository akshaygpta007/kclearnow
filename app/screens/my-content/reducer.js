import {SAVE_MY_CONTENT} from '../home/actions';
import {consoleInDebugModeOnly} from '../../helpers/debugging';

const defaultState = {
  myContent: [],
};

const myContent = (state = defaultState, action) => {
  consoleInDebugModeOnly(state.myContent, 'state.myContent');
  consoleInDebugModeOnly(action, 'action');
  switch (action.type) {
    case SAVE_MY_CONTENT:
      return {...state, myContent: [...state.myContent, action.data]};
    default:
      return state;
  }
};

export default myContent;
