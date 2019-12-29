import {MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_FAILURE} from './actions';

const defaultState = [];

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES_REQUEST:
    case MOVIES_SUCCESS:
    case MOVIES_FAILURE:
      return {...state, ...action.data};
    default:
      return state;
  }
};

export default movies;
