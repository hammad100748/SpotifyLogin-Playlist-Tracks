import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const PlaylistCard = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <View style={{flex: 0.7}}>
        <Image source={{uri: item.images[0].url}} style={styles.thumbnail} />
      </View>

      <View style={{flex: 0.3, alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: '400'}}>{item.name}</Text>
        <Text style={{fontSize: 12, textAlign: 'center'}}>
          Total Track: {item.tracks.total}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistCard;

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    width: width * 0.45,
    borderRadius: 10,
    margin: '2%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  thumbnail: {
    height: height * 0.16,
    width: height * 0.16,
    borderRadius: (height * 0.16) / 2,
  },
});
