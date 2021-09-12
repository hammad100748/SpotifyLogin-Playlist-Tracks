import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Loader from '../components/Loader';
import PlaylistCard from '../components/PlaylistCard';
import {ROUTES} from '../constants';
import {useAuthContext} from '../context/AuthContext';
import {getRecommendedPLaylist} from '../services/SpotifyServices';

let limit = 10;
let offset = 0;

const RecommendedPlaylists = ({navigation}) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getPlaylists();
  }, []);

  const getPlaylists = async () => {
    try {
      const {data} = await getRecommendedPLaylist(limit, offset);
      setPlaylists([...playlists, ...data.playlists.items]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    offset += limit;
    limit += 20;
    getPlaylists();
  };

  return (
    <Background title="Playlist">
      {playlists.length === 0 && <Loader />}
      {playlists.length > 0 && (
        <FlatList
          numColumns={2}
          data={playlists}
          renderItem={({item}) => (
            <PlaylistCard
              item={item}
              onPress={() =>
                navigation.push(ROUTES.PLAYLIST_TRACKS, {playlistId: item.id})
              }
            />
          )}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.4}
          onEndReached={handleLoadMore}
        />
      )}
    </Background>
  );
};

export default RecommendedPlaylists;

const styles = StyleSheet.create({});
