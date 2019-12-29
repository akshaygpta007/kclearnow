import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {fetchMovies} from './api';
import styles from './styles';
import {saveMyContent} from './actions';

const Home = ({dispatch, movies, loading, error}) => {
  useEffect(() => {
    fetchMovies(dispatch, 'all');
  }, [dispatch]);

  const renderMovie = ({item}) => {
    const {Title, Poster, imdbID} = item;
    return (
      <View style={styles.movie} key={imdbID}>
        <Image source={{uri: Poster}} style={styles.poster} />
        <Text>{Title}</Text>
        <TouchableOpacity
          style={styles.save}
          onPress={() => saveMyContent(dispatch, item)}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={_.debounce(text => fetchMovies(dispatch, text), 1000)}
      />
      <FlatList
        onRefresh={() => fetchMovies(dispatch, 'all')}
        data={movies}
        keyExtractor={({imdbID}) => imdbID}
        refreshing={!!loading}
        renderItem={renderMovie}
        style={styles.moviesList}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
};

const mapStateToProps = ({
  movies: {data: {Search = [], Error} = {}, loading},
}) => ({
  movies: Search,
  loading,
  error: Error,
});

export default connect(mapStateToProps)(Home);
