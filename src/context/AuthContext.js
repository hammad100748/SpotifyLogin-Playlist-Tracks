import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  authenticateSpotify,
  refreshSpotifyToken,
  getRecommendedPLaylist,
} from '../services/SpotifyServices';
import {getTokenData, isTokenExpired, storeTokenData} from '../utils/handlers';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    initiateAuth();
  }, []);

  const initiateAuth = async () => {
    try {
      let tokenData = await getTokenData();

      if (!tokenData) tokenData = await authenticateSpotify();
      else if (isTokenExpired(tokenData.accessTokenExpirationDate))
        tokenData = await refreshSpotifyToken(tokenData.refreshToken);
      console.log(tokenData.accessToken);  
      storeTokenData(tokenData);
      setToken(tokenData);
      setInitializing(false);
    } catch (error) {
      console.log('Init Auth Error**** ', error.status);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        initializing,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
