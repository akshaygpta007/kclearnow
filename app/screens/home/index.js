import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {FlatList, TextInput, Text, View} from 'react-native';
import {fetchMovies} from './api';
import styles from './styles';

const Home = ({dispatch, movies, loading, error}) => {
  useEffect(() => {
    fetchMovies(dispatch, 'all');
  }, [dispatch]);

  const renderMovie = ({item: {Title}}) => {
    return <Text>{Title}</Text>;
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
