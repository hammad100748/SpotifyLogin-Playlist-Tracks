import AsyncStorage from '@react-native-async-storage/async-storage';

// store token data
export const storeTokenData = async token =>
  await AsyncStorage.setItem('@token_data', JSON.stringify(token));

// get token data
export const getTokenData = async () => {
  try {
    const value = await AsyncStorage.getItem('@token_data');
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const isTokenExpired = tokenExpiryDate => {
  if (new Date(tokenExpiryDate) <= new Date()) {
    return true;
  }
  return false;
};

export const milliSecTOMinSec = ms => {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
