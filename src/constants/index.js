export const IPSTACK_API_KEY = '0d5b0eb9552c4c1d5d7f9bbd5df302aa';

export const spotifyAuthConfig = {
  // I have saved these in env file but github ignores it so that's why pasted it direct otherwise i dont save secrets api keys client ids directly in files but save it in env
  clientId: 'e1f6c595bcd241cfaeb179132a0d1278', 
  clientSecret: '81cf24de735b456291cde0626ae30302',
  redirectUrl: 'io.spotifycli.auth://oauthredirect',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

export const ROUTES = {
  LOADING: 'LOADING',
  RECOMMENDED_PLAYLIST: 'RECOMMENDED_PLAYLIST',
  PLAYLIST_TRACKS: 'PLAYLIST_TRACKS',
  TRACK_DETAILS: 'TRACK_DETAILS',
};

export const API_ENDPOINTS = {
  BASE_URL: 'https://api.spotify.com/v1',
  RECOMMENDED_PLAYLIST: '/browse/featured-playlists',
  PLAYLIST: '/playlists',
  TRACK: '/tracks',
};
