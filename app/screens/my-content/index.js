import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';

const MyContent = ({myContent}) => {
  const renderContent = ({item}) => {
    const {Title, Poster, imdbID} = item;
    return (
      <View style={styles.movie} key={imdbID}>
        <Image source={{uri: Poster}} style={styles.poster} />
        <Text>{Title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={myContent}
        renderItem={renderContent}
        keyExtractor={({imdbID}) => imdbID}
      />
    </View>
  );
};

const mapStateToProps = ({myContent: {myContent = []}}) => ({
  myContent,
});

export default connect(mapStateToProps)(MyContent);
