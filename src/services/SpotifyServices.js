import {authorize, refresh} from 'react-native-app-auth';
import publicIP from 'react-native-public-ip';

import {API_ENDPOINTS, IPSTACK_API_KEY, spotifyAuthConfig} from '../constants';
import axios from 'axios';
import {getTokenData} from '../utils/handlers';

// Auth Services
export const authenticateSpotify = async () =>
  await authorize(spotifyAuthConfig);

export const refreshSpotifyToken = async refreshToken =>
  await refresh(spotifyAuthConfig, {
    refreshToken: refreshToken,
  });

export const getRecommendedPLaylist = async (limit, offset) => {
  const token = await getTokenData();
  // Get public ip address from device
  const publicIpAddress = await publicIP();
  // Get Country Code of current user from ip address
  const {data} = await axios.get(
    `http://api.ipstack.com/${publicIpAddress}?access_key=${IPSTACK_API_KEY}&format=1`,
  );
  return axios.get(
    `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.RECOMMENDED_PLAYLIST}?country=${
      data.country_code
    }&limit=${limit.toString()}&offset=${offset.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    },
  );
};

export const getPlaylistTracksByID = async (playlistId, limit, offset) => {
  const token = await getTokenData();
  return axios.get(
    `${
      API_ENDPOINTS.BASE_URL
    }/playlists/${playlistId}/tracks?limit=${limit.toString()}&offset=${offset.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    },
  );
};

export const getTrackDetailsByID = async trackID => {
  const token = await getTokenData();
  return axios.get(`${API_ENDPOINTS.BASE_URL}/tracks/${trackID}`, {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });
};
