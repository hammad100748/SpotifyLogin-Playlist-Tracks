import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaylistTracks from '../screens/PlaylistTracks';
import RecommendedPlaylists from '../screens/RecommendedPlaylists';
import TrackDetails from '../screens/TrackDetails';
import {ROUTES} from '../constants';
import {useAuthContext} from '../context/AuthContext';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const {initializing} = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {initializing ? (
          <Stack.Screen name={ROUTES.LOADING} component={LoadingScreen} />
        ) : (
          <>
            <Stack.Screen
              name={ROUTES.RECOMMENDED_PLAYLIST}
              component={RecommendedPlaylists}
            />
            <Stack.Screen
              name={ROUTES.PLAYLIST_TRACKS}
              component={PlaylistTracks}
            />
            <Stack.Screen
              name={ROUTES.TRACK_DETAILS}
              component={TrackDetails}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
