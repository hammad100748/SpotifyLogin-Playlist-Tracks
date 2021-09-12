import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TrackCard = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: item.album.images[0].url,
        }}
        style={styles.thumbnail}
      />
      <View style={styles.contentBody}>
        <Text style={styles.popularityText}>Popularity: {item.popularity}</Text>
        <Text style={styles.trackText}>{item.name}</Text>
        <Text style={styles.artistText}>Artist: {item.artists[0].name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  container: {height: 86, flexDirection: 'row', marginVertical: '4%'},
  thumbnail: {height: 85, width: 85, borderRadius: 10},
  contentBody: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginLeft: '5%',
  },
  popularityText: {fontSize: 18, color: 'gray'},
  trackText: {fontSize: 15, fontWeight: 'bold'},
  artistText: {fontSize: 14},
});
