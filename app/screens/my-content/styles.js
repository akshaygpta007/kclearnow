import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchBox: {
    borderWidth: 1,
  },
  moviesList: {
    marginTop: 10,
  },
  movie: {
    borderWidth: 1,
    marginBottom: 5,
    flexDirection: 'row',
    flex: 1,
  },
  poster: {
    height: 100,
    width: 100,
  },
  save: {
    padding: 10,
    borderWidth: 1,
    alignSelf: 'flex-end',
  },
});

export default styles;
