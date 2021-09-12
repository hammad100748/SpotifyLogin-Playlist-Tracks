import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Loader from '../components/Loader';
import {getTrackDetailsByID} from '../services/SpotifyServices';
import {milliSecTOMinSec} from '../utils/handlers';
import LoadingScreen from './LoadingScreen';

const {height, width} = Dimensions.get('window');

const TrackDetails = ({navigation, route}) => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const {trackID} = route.params;
  useEffect(() => {
    getTrackDetails();
  }, []);

  getTrackDetails = async () => {
    setLoading(true);
    const {data} = await getTrackDetailsByID(trackID);
    setTrack(data);
    setLoading(false);
  };

  return (
    <Background title="Track Details" onBackPress={() => navigation.goBack()}>
      {!track && <Loader />}
      {track && (
        <View style={styles.container}>
          <Text style={styles.title}>{track.name}</Text>
          <Image
            source={{uri: track.album.images[0].url}}
            style={styles.thumbnail}
          />

          <Text style={styles.artistText}>By {track.artists[0].name}</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.subHeading}>{'Album: '}</Text>
            <Text style={styles.subHeadingBold}>{track.album.name}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.subHeading}>{'Duration: '}</Text>
            <Text style={styles.subHeadingBold}>
              {milliSecTOMinSec(track.duration_ms)}
            </Text>
          </View>
        </View>
      )}
    </Background>
  );
};

export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '25%',
  },
  thumbnail: {
    height: height * 0.3,
    width: height * 0.3,
    borderRadius: 10,
  },
  title: {fontSize: 32, fontWeight: 'bold'},
  artistText: {color: 'gray', fontSize: 18},
  rowContainer: {flexDirection: 'row', alignItems: 'baseline'},
  subHeading: {fontSize: 18},
  subHeadingBold: {fontSize: 18, fontWeight: 'bold'},
});
