export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';
export const MOVIES_FAILURE = 'MOVIES_FAILURE';

export const moviesRequest = dispatch => {
  dispatch({type: MOVIES_REQUEST, data: {loading: true}});
};

export const moviesSuccess = (dispatch, data) => {
  dispatch({
    type: MOVIES_SUCCESS,
    data: {loading: false, data},
  });
};

export const moviesFailure = dispatch => {
  dispatch({
    type: MOVIES_FAILURE,
    data: {loading: false},
  });
};
