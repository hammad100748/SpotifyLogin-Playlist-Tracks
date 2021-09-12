import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Loader from '../components/Loader';
import TrackCard from '../components/TrackCard';
import {ROUTES} from '../constants';
import {getPlaylistTracksByID} from '../services/SpotifyServices';

let limit = 10;
let offset = 0;

const PlaylistTracks = ({navigation, route}) => {
  const [tracks, setTracks] = useState(null);
  const {playlistId} = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPlaylistTracks();
  }, []);

  getPlaylistTracks = async () => {
    setLoading(true);
    const {data} = await getPlaylistTracksByID(playlistId, limit, offset);
    setTracks(data.items);
    setLoading(false);
  };

  const handleLoadMore = () => {
    offset += limit;
    limit += 20;
    getPlaylistTracks();
  };

  return (
    <Background title="Tracks" onBackPress={() => navigation.goBack()}>
      {loading && <Loader />}
      <FlatList
        data={tracks}
        renderItem={({item}) => (
          <TrackCard
            item={item.track}
            onPress={() => {
              navigation.push(ROUTES.TRACK_DETAILS, {trackID: item.track.id});
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.4}
        onEndReached={handleLoadMore}
      />
    </Background>
  );
};

export default PlaylistTracks;

const styles = StyleSheet.create({});
