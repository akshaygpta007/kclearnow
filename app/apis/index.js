const mainURL = 'http://www.omdbapi.com/?apikey=41c60d1b';

export const apisURL = {
  movies: (key = 'm') => `${mainURL}&s=${key}`,
};
