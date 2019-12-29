import axios from 'axios';
import {apisURL} from '../../apis';
import {moviesRequest, moviesSuccess, moviesFailure} from './actions';

const fetchMovies = (dispatch, title) => {
  moviesRequest(dispatch);
  axios
    .get(`${apisURL.movies(title)}`)
    .then(responseData => {
      moviesSuccess(dispatch, responseData.data);
    })
    .catch(error => {
      moviesFailure(dispatch);
    });
};

export {fetchMovies};
